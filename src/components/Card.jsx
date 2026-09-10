import "../styles/Card.css";

function Card({ logo, header, subheader }) {
  return (
    <>
      <div className="card-container">
        <img className="card-logo" src={logo} alt="" />
        <h3 className="card-header">{header}</h3>
        <p className="card-subheader">{subheader}</p>
      </div>
    </>
  );
}

export default Card;
