import { useParams, Link } from "react-router-dom";
import jaggery1 from "../../assets/agro/jaggery1.png";
import powder from "../../assets/agro/powder.png";
import halads from "../../assets/agro/halads.png";
import halad from "../../assets/agro/halad.png";
import coconat1 from "../../assets/agro/coconat1.png";
import Teas from "../../assets/agro/Teas.png";


function Product() {
  const { id } = useParams();

  const agroProducts = [
    {
      id: 1,
      name: "Organic Jaggery",
      category: "Sweetener",
      price: "₹105 / kg",
      image: jaggery1,
      longDescription:
        "Organic jaggery is produced without chemicals. It is rich in minerals and boosts digestion, immunity, and energy.",
      benefits: [
        "Improves digestion",
        "Rich in iron",
        "Boosts immunity",
        "Natural energy source",
      ],
    },
    {
      id: 2,
      name: "Organic Jaggery Powder",
      category: "Sweetener",
      price: "₹120 / kg",
      image: powder,
      longDescription:
        "Organic jaggery powder is easy to use and retains all nutrients of traditional jaggery.",
      benefits: [
        "Easy to use",
        "Healthy sugar alternative",
        "Good for metabolism",
      ],
    },
    {
      id: 3,
      name: "Turmeric",
      category: "Spices",
      price: "₹180 / kg",
      image: halads,
      longDescription:
        "Turmeric is known for its anti-inflammatory and antioxidant properties.",
      benefits: [
        "Anti-inflammatory",
        "Boosts immunity",
        "Good for skin",
      ],
    },
     {
  id: 4,
  name: "Culinary Turmeric",
  category: "Spices",
  price: "₹200 / kg",
  image: halad,
  longDescription:
    "Culinary turmeric is a premium-quality spice widely used in Indian cooking for its vibrant color, earthy aroma, and health benefits. It is naturally processed to retain its curcumin content, making it ideal for daily culinary use.",
  benefits: [
    "Natural anti-inflammatory properties",
    "Enhances immunity",
    "Improves digestion",
    "Rich in antioxidants",
    "Supports skin health",
  ],
},
    {
      id: 5,
      name: "Water Coconut",
      category: "Fruits",
      price: "₹50 / piece",
      image: coconat1,
      longDescription:
        "Water coconut is naturally hydrating and rich in electrolytes.",
      benefits: [
        "Hydrating",
        "Rich in electrolytes",
        "Good for digestion",
      ],
    },
    {
      id: 6,
      name: "Natural Tea Powder",
      category: "Beverages",
      price: "₹250 / kg",
      image: Teas,
      longDescription:
        "Natural tea powder sourced from premium gardens with strong aroma.",
      benefits: [
        "Boosts alertness",
        "Rich aroma",
        "No artificial flavors",
      ],
    },
  ];

  const product = agroProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container text-center my-5">
        <h3>Product Not Found</h3>
        <Link to="/products/agro" className="btn btn-success mt-3">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <div className="row g-0 align-items-center">

          {/* Image */}
          <div className="col-md-5 text-center p-4 bg-light">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
            />
          </div>

          {/* Content */}
          <div className="col-md-7">
            <div className="card-body p-4">

              <span className="badge bg-success mb-2">
                {product.category}
              </span>

              <h3 className="card-title mt-2 fw-bold">
                {product.name}
              </h3>

              <h5 className="text-success fw-bold">
                {product.price}
              </h5>

              <p className="text-muted mt-3">
                {product.longDescription}
              </p>

              <h6 className="mt-4">Benefits:</h6>
              <ul className="list-group list-group-flush mb-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="list-group-item">
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                to="/products/agro"
                className="btn btn-success"
              >
                ← Back to Agro Products
              </Link>
              <Link to={"/contact"}>
              <button className="btn btn-primary m-2 p-2">show know</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );
}

export default Product;
