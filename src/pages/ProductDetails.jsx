import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products } = useProducts();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <>
      {/* Product Details */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-lg shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>

          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

          <h2 className="text-3xl font-bold text-blue-600 mt-6">
            ${product.price}
          </h2>

          <p className="mt-2">⭐ Rating: {product.rating}</p>

          <p className="mt-2">📦 Stock: {product.stock}</p>

          <p className="mt-2">🏷️ Brand: {product.brand}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add To Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <h2 className="text-3xl font-bold mb-8">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;