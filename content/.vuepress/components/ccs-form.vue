<template>
  <form method="POST" action="/api/form" class="section">
    <div class="row my-2">
      <div class="form-group col-sm-12 col-md-6">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="" required>
      </div>
      <div class="form-group col-sm-12 col-md-6">
        <label for="pronoun">Pronomen (optional)</label>
        <input type="text" class="form-control" id="pronoun" name="pronoun" placeholder="">
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col-sm-12 col-md-6">
        <label for="email">E-Mail-Adresse</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="" required>
      </div>
      <div class="form-group col-sm-12 col-md-6">
        <label for="phonenumber">Telefonnummer (optional)</label>
        <input type="tel" class="form-control" id="phonenumber" name="phonenumber" placeholder="">
        <span>bitte leerlassen wenn nur per E-Mail kommuniziert werden soll</span>
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col-sm-12 col-md-6">
        <label for="hochschule">Hochschule/Universität</label>
        <input type="text" class="form-control" id="hochschule" name="hochschule" placeholder="" required>
      </div>
      <div class="form-group col-sm-12 col-md-6">
        <label for="startdate">(geplantes) Startdatum</label>
        <input type="date" class="form-control" id="startdate" name="startdate" placeholder="" required>
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col">
        <label for="thesisName">Titel der Masterarbeit</label>
        <input type="text" class="form-control" id="thesisName" name="thesisName" placeholder="" required>
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col">
        <label for="institutProfessor">Institut/Professur (optional)</label>
        <input type="text" class="form-control" id="institutProfessor" name="institutProfessor" placeholder="">
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col">
        <label for="thesisTask">Wie ist die Aufgabenstellung deiner Arbeit? max. 1000 Zeichen</label>
        <textarea type="text" class="form-control" id="thesisTask" name="thesisTask" rows="2" placeholder="" max="1000" required></textarea>
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col">
        <label for="reasonApplicationThesis">Warum passt deine Arbeit ins Thema? max. 1000 Zeichen</label>
        <textarea class="form-control" name="reasonApplicationThesis" id="reasonApplicationThesis" rows="4" max="1000" required></textarea>
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col">
        <label for="reasonApplicationPerson">Erzähl uns etwas über dich? max. 1000 Zeichen</label>
        <textarea class="form-control" name="reasonApplicationPerson" id="reasonApplicationPerson" rows="4" max="1000" required></textarea>
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col">
        <label for="captcha">Captcha: Aus welcher Stadt kommt der Chaostreff Flensburg e.V.?</label>
        <input type="text" class="form-control" id="captcha" name="captcha" required>
      </div>
    </div>
    <div class="row my-3">
      <div class="col">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="approval" name="approval" required>
          <label class="form-check-label" for="approval">
            Ich habe die Förderbedingungen gelesen und willige ein
          </label>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-success">Abschicken</button>
  </form>
</template>
