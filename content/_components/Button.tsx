const styles = {
  button: {
    backgroundColor: "#9340ff",
    textAlign: "center",
    color: "#ffffff",
    padding: "15px 25px",
    borderRadius: 5,
  },
};

export default ({ link, children }) => (
  <a href={link} target="blank" style={styles.button}>
    {children}
  </a>
);
