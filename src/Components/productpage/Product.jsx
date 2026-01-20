import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./Product.css";

function Product() {
  const domainName = import.meta.env.VITE_DOMAIN_NAME;
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const { category } = useParams(); // bedsheets, towel, etc.

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH ================= */

  useEffect(() => {
    loadData();
  }, [category]);

  const loadData = async () => {
    try {
      setLoading(true);

      const [catRes, prodRes] = await Promise.all([
        axios.get(`${API_BASE}/categories`, {
          params: { domainName },
        }),
        axios.get(`${API_BASE}/products`, {
          params: { domainName },
        }),
      ]);

      const categoryList = catRes.data?.data || [];
      const productList = prodRes.data?.data || [];

      setCategories(categoryList);
      setProducts(productList);
    } catch (err) {
      console.error("Product load error:", err);
    } finally {
      setLoading(false);
    }
  };

  const activeCategory = useMemo(() => {
    return categories.find(
      (c) =>
        c.slug === category ||
        c.name?.toLowerCase().replace(/\s+/g, "-") === category ||
        c.name?.toLowerCase() === category
    );
  }, [categories, category]);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return [];
    return products.filter(
      (p) => String(p.categoryId) === String(activeCategory._id)
    );
  }, [products, activeCategory]);

  /* ================= UI ================= */

  return (
    <div className="container mt-4">
      <h3 className="mb-4">{activeCategory?.name || "Products"}</h3>

      {loading && <p>Loading products...</p>}

      {!loading && filteredProducts.length === 0 && <p>No products found</p>}

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product._id} className="col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
