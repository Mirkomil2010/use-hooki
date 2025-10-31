import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      {posts.slice(0, 6).map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            background: "#fafafa",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <img
            src={post.images[0]}
            alt={post.title}
            width="180"
            style={{ borderRadius: 8 }}
          />
        </div>
      ))}
    </div>
  );
}
