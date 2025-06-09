import ButtonBase from "./ButtonBase.tsx";

const styles = {
  button: {
    "background-color": "#9340ff",
    color: "#ffffff !important",
  },
};

export default ({ link, children }) => (
  <ButtonBase link={link} style={styles.button}>
    {children}
  </ButtonBase>
);
