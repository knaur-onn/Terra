import "../styles/ImageCard.css";

function ImageCard({ image, tag, productName, productSubName, price }) {
  return (
    <>
      <div className="image-card-container">
        <div className="image-container">
          <img className="image" src={image} alt="" />
          <p className="image-tag">{tag}</p>
        </div>
        <div className="text-container">
          <div className="text-left">
            <p className="product-name">{productName}</p>
            <p className="product-subname">{productSubName}</p>
          </div>
          <div className="price">
            <p className="product-price">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
