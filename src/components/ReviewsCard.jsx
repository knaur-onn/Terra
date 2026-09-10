import stars from "../assets/stars.svg";
import "../styles/ReviewsCard.css";

function ReviewsCard({ review, author, authorTitle }) {
  return (
    <>
      <div className="reviews-card-container">
        <div className="reviews-count">
          <img src={stars} alt="" />
        </div>
        <div className="reviews-text-container">
          <p className="reviews-text">{review}</p>
        </div>
        <div className="reviews-author-container">
          <p className="reviews-author">{author}</p>
          <p className="reviews-author-title">{authorTitle}</p>
        </div>
      </div>
    </>
  );
}

export default ReviewsCard;
