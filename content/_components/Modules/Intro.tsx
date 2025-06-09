import IconRocketSVG from "../Images/IconRocketSVG.tsx";

const styles = {
  section: {
    "padding-top": "20px",
  },
  container: {
    display: "flex",
    "flex-direction": "row",
    "align-ttems": "center",
  },
  title: {
    "padding-bottom": "10px",
  },
  icon: {
    margin: "40px",
  },
};

export default ({ text }) => (
  <section style={styles.section}>
    <div className={"display-row"}>
      <div style={styles.icon}>
        <IconRocketSVG />
      </div>
      <div>
        <h1 style={styles.title} id="headline">
          {text.intro_title}
        </h1>
        <p>{text.intro_text}</p>
        <p>{text.intro_text2}</p>
      </div>
    </div>
  </section>
);
