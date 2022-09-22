import { useState, useEffect } from "react";

export default function useProducts() {
  const [productsData, setProductsData] = useState({
    data: {},
    isLoading: false,
  });

  useEffect(() => {
    async function getProductsData() {
      setProductsData({ ...productsData, isLoading: true });

      const res = await fetch("http://localhost:3004/products");
      const data = await res.json();

      setTimeout(() => {
        setProductsData({ data, isLoading: false });
      }, 1000);
    }
    getProductsData();
  }, []);

  return [productsData.data, productsData.isLoading];
}
