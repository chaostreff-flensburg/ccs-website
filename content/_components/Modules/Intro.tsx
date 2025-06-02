import IconRocketSVG from "../Images/IconRocketSVG.tsx";

const styles = {
  section: {
    paddingTop: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    paddingBottom: 10,
  },
  icon: {
    margin: 40,
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
