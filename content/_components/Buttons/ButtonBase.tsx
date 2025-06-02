export default function ButtonBase({ link, children, style = {} }) {
  return (
    <a href={link} target="_blank" class={"btn-grad"}>
      {children}
    </a>
  );
}
