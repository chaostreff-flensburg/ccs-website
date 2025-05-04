const baseStyles = {
  textAlign: "center",
  padding: "15px 25px",
  borderRadius: 5,
  textDecoration: "transparent",
  fontSize: "1.2rem",
};

export default function ButtonBase({ link, children, style = {} }) {
  return (
    <a href={link} target="_blank" style={{ ...baseStyles, ...style }}>
      {children}
    </a>
  );
}
