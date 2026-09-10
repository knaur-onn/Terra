import Title from "../components/Title";
import ReviewsCard from "../components/ReviewsCard";
import "../styles/Reviews.css";

function Reviews() {
  return (
    <>
      <section className="reviews-section">
        <Title subtitle="REVIEWS" mainTitle="Sustained by our community" />
        <div className="reviews-card">
          <ReviewsCard
            review='"The Calathea arrived pristine. The soil was damp, the packaging was completely biodegradable."'
            author="Clara Vance"
            authorTitle="Monstera parent since 2023"
          />
          <ReviewsCard
            review='"Terra has changed how I furnish my home. Their clay pots match their plants flawlessly."'
            author="Marcus Thorne"
            authorTitle="Interior Designer"
          />
          <ReviewsCard
            review={
              "I've killed many plants in my life, but the hand-picked snake plant from Terra is thriving. Their tactical care guide took the guessing out of it completely."
            }
            author="Aisha Patel"
            authorTitle="Casual Gardener"
          />
        </div>
      </section>
    </>
  );
}

export default Reviews;
