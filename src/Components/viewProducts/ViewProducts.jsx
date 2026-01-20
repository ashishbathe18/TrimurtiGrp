import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ViewProduct.css";

const baseURL = import.meta.env.VITE_URL;

/* ===== buffer → base64 ===== */
const bufferToBase64 = (buffer) => {
  if (!buffer) return null;
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${baseURL}/api/products/${id}`);
        const data = await res.json();

        if (data.product?.image?.data?.data) {
          const base64 = bufferToBase64(
            data.product.image.data.data
          );
          data.product.imageBase64 = `data:${data.product.image.contentType};base64,${base64}`;
        }

        setProduct(data.product);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <section className="view-product">
      <div className="view-product-card">
        <img src={product.imageBase64} alt={product.title} />

        <div className="view-product-content">
          <h1>{product.title}</h1>

          <p className="category">
            Category: {product.categories?.join(", ")}
          </p>

          <p className="description">
            {product.description}
          </p>

          <Link to="/products/agro" className="back-btn">
            ← Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ViewProduct;
