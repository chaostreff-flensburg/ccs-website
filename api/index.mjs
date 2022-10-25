import axios from "axios";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended:false }));

const axiosZammad = axios.create({
  baseURL: 'https://zammad.chaostreff-flensburg.de/api/v1',
  auth: {
    username: process.env.AUTH_USERNAME,
    password: process.env.AUTH_PASSWORD,
  },
});

const requiredFields = [
  'name',
  'email',
  'hochschule',
  'startdate',
  'thesisName',
  'institutProfessor',
  'thesisTask',
  'reasonApplicationThesis',
  'reasonApplicationPerson',
];

app.post('/api/form', async (req, res) => {
  if (req.body.captcha?.toLowerCase() !== 'flensburg') {
    res.status(401);
    res.send('wrong_captcha');
    return;
  }
  if (req.body.approval?.toLowerCase() !== 'on') {
    res.status(401);
    res.send('please_give_approval');
    return;
  }
  const requiredFieldsMissing = requiredFields.filter(element => !req.body?.[element]);
  if (requiredFieldsMissing.length > 0) {
    res.status(400);
    res.send(`missing_required_fields: ${ requiredFieldsMissing.join(', ') }`);
    return;
  }

  try {
    const names = req.body.name.split(' ');
    await axiosZammad.post('/users', {
      lastname: names.pop(),
      firstname: names.join(' '),
      email: req.body.email,
      organization: 'Chaostreff Flensburg',
      roles: ['Customer'],
    });
  } catch (e) {
    if (e.response.data.includes('Email address is already used for other user.')) {
      console.error(`user "${ req.body.email }" does already exit`);
    } else {
      console.error(e);
      res.status(500);
      res.send('Beim Erstellen des Benutzers ist ein Fehler aufgetreten. Wenn der Fehler noch mal auftritt, solltest du dich an ccs@chaostreff-flensburg.de melden.');
      return;
    }
  }

  try {
    let body = ''
    Object.entries(req.body).forEach(element=>{
      body += `${element[0]}: \n ${element[1]} \n\n`
    })
    body += JSON.stringify(req.body)
    await axiosZammad.post('/tickets', {
      title: `CCS Bewerbung - ${ req.body.name } - ${ req.body.thesisName }`,
      customer: req.body.email,
      group: 'Users',
      article: {
        subject: `CCS Bewerbung - ${ req.body.name } - ${ req.body.thesisName }`,
        body,
        type: 'email',
        internal: false,
      },
    });
    res.status(200);
    res.send('Wir haben deine Bewerbung Erfolgreich gespeichert.');
  } catch (e) {
    res.status(500);
    res.send('Beim Erstellen des Tickets ist ein Fehler aufgetreten. Wenn der Fehler noch mal auftritt, solltest du dich an ccs@chaostreff-flensburg.de melden.');
  }
});

app.listen(process.env.PORT);
console.log(`server started on port ${ process.env.PORT }`);
