import { useParams, Link } from "react-router-dom";
import nail from "../../assets/manuf/nail.png";
import roofing from "../../assets/manuf/roofing.png";
import wire from "../../assets/manuf/wire.png";


function ViewManufacturing() {
  const { id } = useParams();

  const manufacturingProducts = [
    {
      id: 1,
      name: "Construction Nail",
      category: "Construction",
      price: "₹90 / kg",
      image: nail,
      details:
        "These nails are manufactured using high-quality steel to ensure durability and strength. Suitable for heavy-duty construction applications.",
      uses: [
        "Building construction",
        "Wood framing",
        "Furniture making",
      ],
    },
    {
      id: 2,
      name: "Roofing Nail",
      category: "Roofing",
      price: "₹120 / kg",
      image: roofing,
      details:
        "They offer strong grip and corrosion resistance, making them ideal for long-term outdoor use.",
      uses: [
        "Roof installation",
        "Shingles fixing",
        "Outdoor construction",
      ],
    },
    {
      id: 3,
      name: "Binding Wire",
      category: "Wire",
      price: "₹60 / kg",
      image: wire,
      details:
        "Made from mild steel, it provides flexibility and strength for construction binding purposes.",
      uses: [
        "Rebar binding",
        "Concrete construction",
        "Industrial use",
      ],
    },
  ];

  const product = manufacturingProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container text-center my-5">
        <h3>Product Not Found</h3>
        <Link to="/products/manufacturing" className="btn btn-success mt-3">
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

              <h3 className="card-title mt-2">{product.name}</h3>
              <h5 className="text-success fw-bold">{product.price}</h5>

              <p className="card-text mt-3 text-muted">
                {product.details}
              </p>

              <h6 className="mt-4">Uses:</h6>
              <ul className="list-group list-group-flush mb-4">
                {product.uses.map((use, index) => (
                  <li key={index} className="list-group-item">
                    {use}
                  </li>
                ))}
              </ul>

              <Link
                to="/products/manufacturing"
                className="btn btn-success"
              >
                ← Back to Manufacturing Products
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

export default ViewManufacturing;
