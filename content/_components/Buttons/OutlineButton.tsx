import ButtonBase from "./ButtonBase.tsx";

const styles = {
  outlineButton: {
    color: "#9340ff !important",
    border: "2px solid #9340ff",
  },
};

export default ({ link, children }) => (
  <ButtonBase link={link} style={styles.outlineButton}>
    {children}
  </ButtonBase>
);
