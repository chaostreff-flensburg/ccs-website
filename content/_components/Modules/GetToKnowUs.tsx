import OutlineButton from "../Buttons/OutlineButton.tsx";

export default ({ text }) => (
  <section>
    <h2 class="text-primary text-center">{text.getToKnowUs_title}</h2>
    <p>
      {text.getToKnowUs_text}
      <div class="col-md-7">
        <ul>
          <li>{text.getToKnowUs_date1}</li>
          <li>{text.getToKnowUs_date2}</li>
        </ul>
      </div>
    </p>
    <OutlineButton link="https://meet.ffmuc.net/ccs-info">
      {text.getToKnowUs_buttonText}
    </OutlineButton>
  </section>
);
