import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

import "./ProductCard.css";

function ProductCard({ product, enableSEO = false }) {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= IMAGE LOAD ================= */
  useEffect(() => {
    if (product?._id) loadImage();
  }, [product?._id]);

  const loadImage = async () => {
    try {
      const res = await axios.get(`${API_BASE}/product-images`, {
        params: { productId: product._id },
      });

      setImage(res.data?.data?.[0]?.image || null);
    } catch {
      setImage(null);
    } finally {
      setLoading(false);
    }
  };

  /* ================= ATTRIBUTE HELPERS ================= */
  const getAttr = (key) =>
    product.attributes?.find((a) => a.attributeKey === key)?.values?.[0];

  const title = getAttr("title") || "Product";
  const fullDescription = getAttr("description") || "";
  const description = truncateText(fullDescription, 14);
  const usage = getAttr("usage");

  const metaDescription =
    fullDescription || `Buy ${title} from Trimurti Group India`;

  /* ================= UI ================= */
  return (
    <>
      {/* ================= SEO (OPTIONAL) ================= */}
      {enableSEO && (
        <Helmet>
          <title>{title} | Trimurti Group India</title>

          <meta name="description" content={metaDescription} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          {image && <meta property="og:image" content={image} />}

          <meta name="robots" content="index, follow" />
        </Helmet>
      )}

      {/* ================= PRODUCT CARD ================= */}
      <div className="product-card">
        {/* IMAGE */}
        <div className="product-image">
          {loading ? (
            <div className="img-placeholder">Loading...</div>
          ) : image ? (
            <img src={image} alt={title} />
          ) : (
            <div className="img-placeholder">No Image</div>
          )}
        </div>

        {/* CONTENT */}
        <div className="product-content">
          <h5 className="product-title">{title}</h5>

          <p className="product-desc">{description}</p>

          {usage && (
            <div className="product-usage">
              <strong>Usage:</strong> {usage}
            </div>
          )}

          {/* OTHER ATTRIBUTES */}
          <div className="product-attrs">
            {product.attributes
              ?.filter(
                (a) =>
                  !["title", "description", "usage"].includes(a.attributeKey)
              )
              .map((attr) =>
                attr.values.map((val, idx) => (
                  <span key={idx} className="attr-chip">
                    {attr.attributeKey}: {val}
                  </span>
                ))
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

/* ================= HELPERS ================= */
function truncateText(text, wordLimit = 12) {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
}
