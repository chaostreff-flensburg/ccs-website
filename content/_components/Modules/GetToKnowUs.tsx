export default ({ ...props }) => (
  <section>
    <h2 class="text-primary text-center">{props.text.getToKnowUs_title}</h2>
    <p>
      {props.text.getToKnowUs_text}
      <div class="col-md-7">
        <ul>
          <li>{props.text.getToKnowUs_date1}</li>
          <li>{props.text.getToKnowUs_date2}</li>
        </ul>
      </div>
    </p>
    <props.comp.Button link="https://meet.ffmuc.net/ccs-info">
      {props.text.getToKnowUs_buttonText}
    </props.comp.Button>
  </section>
);
