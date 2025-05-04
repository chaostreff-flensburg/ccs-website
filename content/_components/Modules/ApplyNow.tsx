export default ({ ...props }) => (
  <section id="apply">
    <h2 class="text-primary text-center">{props.text.applyNow_title}</h2>
    <p class="section"> {props.text.applyNow_text}</p>
    <props.comp.Buttons.Button link="https://bewerben.c3fl.de/#/?proposal=ccs-20242">
      {props.text.applyNow_buttonText}
    </props.comp.Buttons.Button>
  </section>
);
