import { useProducts } from "../context/ProductsContext";
import ProductCard from "./ProductCard";
import SkeletonCard from "../components/SkeletonCard";

const FeaturedProducts = () => {
  const { products, loading } = useProducts();

if (loading) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </section>
  );
}

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;