import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useProduct() {
  const { id: productId } = useParams();
  const [productData, setProductData] = useState({
    data: {},
    isLoading: false,
  });

  useEffect(() => {
    async function getProductData() {
      setProductData({ ...productData, isLoading: true });

      const res = await fetch(`http://localhost:3004/products/${productId}`);
      const data = await res.json();

      setTimeout(() => {
        setProductData({ data, isLoading: false });
      }, 1000);
    }
    getProductData();
  }, [productId]);

  return [productData.data, productData.isLoading];
}
