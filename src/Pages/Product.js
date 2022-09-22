import useProduct from "../Hooks/useProduct";
import Spinner from "../Components/Spinner";
import ProductReviews from "../Components/ProductReviews";

export default function Product() {
  const [product, isLoading] = useProduct();

  if (!Object.keys(product).length || isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-wrap">
      <img
        className="w-full rounded overflow-hidden shadow-lg"
        src="https://source.unsplash.com/random/1920x1080?furniture"
        alt="Sunset in the mountains"
      />
      <div className="w-full my-12">
        <h2 className="font-medium leading-tight text-4xl mb-2">
          {product.name}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div className="pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #furniture
          </span>
        </div>
      </div>
      <ProductReviews />
    </div>
  );
}
