import { useEffect, useState } from "react";
import api from "../api/api";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";
import SkeletonCard from "../components/SkeletonCard";


const Products = () => {
const { products, loading } = useProducts();  
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("");

  
    useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await api.get("/products/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategories();
}, []);


if (loading) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}
    

  const filteredProducts = products
  .filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  })

  
  .sort((a, b) => {
    if (sort === "lowToHigh") {
      return a.price - b.price;
    }

    if (sort === "highToLow") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        All Products
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 mb-8"
      />
      <div className="flex flex-wrap gap-3 mb-8">

  <button
    onClick={() => setSelectedCategory("all")}
    className={`px-4 py-2 rounded-full ${
      selectedCategory === "all"
        ? "bg-blue-600 text-white"
        : "bg-gray-200"
    }`}
  >
    All
  </button>

  {categories.map((category) => (
    <button
      key={category.slug}
      onClick={() => setSelectedCategory(category.slug)}
      className={`px-4 py-2 rounded-full ${
        selectedCategory === category.slug
          ? "bg-blue-600 text-white"
          : "bg-gray-200"
      }`}
    >
      {category.name}
    </button>
  ))}

  <div className="mb-8">
  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Sort By</option>
    <option value="lowToHigh">Price: Low to High</option>
    <option value="highToLow">Price: High to Low</option>
  </select>
</div>

</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
};

export default Products;