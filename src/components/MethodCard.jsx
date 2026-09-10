import "../styles/MethodCard.css";

function MethodCard({
  image,
  subheader,
  header,
  description,
  isInverted = false,
}) {
  return (
    <>
      <div className={`method-card-container ${isInverted && "inverted"}`}>
        <div className="method-image-container">
          <img className="method-image" src={image} alt="" />
        </div>
        <div className="method-card-text">
          <p className="method-card-subheader">{subheader}</p>
          <p className="method-card-header">{header}</p>
          <p className="method-card-description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default MethodCard;
