const styles = {
  infoBox: {
    padding: "20px",
    margin: "35px 10px",
    borderRadius: "5px",
    backgroundColor: "#9340ff",
  },
  heading: {
    marginTop: "0",
  },
};

export default function ({ title, children }) {
  return (
    <section style={styles.infoBox}>
      <h3 style={styles.heading}>{title}</h3>
      {children}
    </section>
  );
}
