import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import "./blog.css";

// ✅ HERO IMAGE IMPORT
import heroImage from "../../assets/blog1/blog.jpeg";


// ENV
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const DOMAIN_NAME = import.meta.env.VITE_DOMAIN_NAME;

// 🔹 IMAGE HANDLER
const getImageSrc = (image) => {
  if (!image) return "";
  if (image.startsWith("data:image")) return image;
  return `${API_BASE_URL.replace("/api", "")}/${image}`;
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/blogs`, {
          params: { domainName: DOMAIN_NAME },
        });

        if (res.data?.success) {
          setBlogs(res.data.data || []);
        } else {
          setBlogs([]);
        }
      } catch (err) {
        console.error("Blog fetch error:", err);
        setError("Unable to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {/* 🔹 HERO SECTION */}
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <Container>
          <h1 className="blog-title">Our Blog</h1>
          <p className="blog-subtitle">
            Agro • Textile • Manufacturing • Quality Products
          </p>
        </Container>
      </section>

      {/* 🔹 LOADING */}
      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      )}

      {/* 🔹 ERROR */}
      {!loading && error && (
        <p className="text-center text-danger my-5">{error}</p>
      )}

      {/* 🔹 BLOG LIST */}
      {!loading &&
        blogs.map((blog, index) => (
          <section className="about-section" key={blog._id}>
            <Container>
              <Row className="align-items-center">
                <Col
                  md={6}
                  className={index % 2 !== 0 ? "order-md-2" : ""}
                >
                  <h2>{blog.title}</h2>

                  {blog.subTitle && (
                    <h6 className="text-muted">{blog.subTitle}</h6>
                  )}

                  <p>{blog.content}</p>
                </Col>

                <Col md={6}>
                  {blog.image && (
                    <img
                      src={getImageSrc(blog.image)}
                      alt={blog.title}
                      className="img-fluid rounded-img"
                    />
                  )}
                </Col>
              </Row>
            </Container>
          </section>
        ))}

      {/* 🔹 EMPTY */}
      {!loading && blogs.length === 0 && !error && (
        <p className="text-center my-5">No blogs found</p>
      )}
    </>
  );
};

export default Blog;
