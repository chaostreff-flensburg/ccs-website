export default function ButtonBase({ link, children, style = {} }) {
  return (
    <a href={link} target="_blank" className="button-base" style={{ ...style }}>
      {children}
    </a>
  );
}
