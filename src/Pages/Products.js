import React from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";
import Spinner from "../Components/Spinner";
import "../Styles/Home.scss";

export default function Products() {
  const [products, isLoading] = useProducts();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-wrap">
      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 w-full mb-12 px-4">
        {products.length &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
