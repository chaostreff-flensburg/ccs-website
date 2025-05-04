import Button from "../Buttons/Button.tsx";

const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

export default ({ text }) => (
  <section id="apply">
    <h2 class="text-primary text-center">{text.applyNow_title}</h2>
    <p class="section"> {text.applyNow_text}</p>
    <div style={styles.buttonContainer}>
      <Button link="https://bewerben.c3fl.de/#/?proposal=ccs-20242">
        {text.applyNow_buttonText}
      </Button>
    </div>
  </section>
);
