export default ({ title, text, image, textPosition, addOn }) => (
  <div className="row section">
    {textPosition === "right" && (
      <div className="col text-center image-container">{image}</div>
    )}
    <div className="col-md-7">
      <h2 className="text-primary">{title}</h2>
      <p>{text}</p>
    </div>
    {textPosition === "left" && (
      <div className="col text-center image-container">{image}</div>
    )}
    {addOn}
  </div>
);
