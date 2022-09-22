import useProductReviews from "../Hooks/useProductReviews";
import Review from "./Review";
import Spinner from "./Spinner";

export default function ProductReviews() {
  const [reviews, isLoading] = useProductReviews();

  if (!Object.keys(reviews).length && isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h4 className="font-medium leading-tight text-2xl mb-4">Reviews</h4>
      <div>
        {reviews.length ? (
          reviews.map((review) => <Review {...review} />)
        ) : (
          <p>No Reviews available... Be the first!</p>
        )}
      </div>
    </div>
  );
}
