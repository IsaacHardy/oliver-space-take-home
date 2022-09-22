import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useProductReviews() {
  const { id: productId } = useParams();
  const [productReviewsData, setProductReviewsData] = useState({
    data: {},
    isLoading: false,
  });

  useEffect(() => {
    async function getProductReviewsData() {
      setProductReviewsData({ ...productReviewsData, isLoading: true });

      const res = await fetch(
        `http://localhost:3004/products/${productId}/reviews`
      );
      const data = await res.json();

      setTimeout(() => {
        setProductReviewsData({ data, isLoading: false });
      }, 1000);
    }
    getProductReviewsData();
  }, [productId]);

  return [productReviewsData.data, productReviewsData.isLoading];
}
