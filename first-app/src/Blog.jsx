import React from "react";
import "./Blog.css";

function Blog() {
  var title = "10 Tips for Effective Time Management";
  var author = "John Doe";
  var description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  var image = "https://via.placeholder.com/150";

  return (
    <div
      className="blog-container"
      style={{
        width: "500px",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1
        style={{
          color: "darkblue",
          fontSize: "28px",
        }}
      >
        {title}
      </h1>

      <h3
        style={{
          color: "gray",
          fontSize: "18px",
        }}
      >
        Author: {author}
      </h3>

      <p
        style={{
          color: "#333",
          lineHeight: "1.6",
          fontSize: "16px",
        }}
      >
        {description}
      </p>

      <img src={image} alt="Blog thumbnail" className="blog-image" />
    </div>
  );
}

export default Blog;