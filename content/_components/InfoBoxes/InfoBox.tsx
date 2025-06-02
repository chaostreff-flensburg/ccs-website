const styles = {
  infoBox: {
    padding: "20px",
    margin: "35px 10px",
    borderRadius: "5px",
    background:
      "linear-gradient(217deg,rgba(124, 20, 38, 1) 0%, rgba(15, 34, 77, 1) 37%)",
  },
  heading: {
    marginTop: "0",
    paddingBottom: 10,
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
