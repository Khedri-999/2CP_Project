import { useState, useEffect } from "react";
import "../CSS/MyPosts.css";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import axios from "axios";
import img1 from "../assets/picture.jpg";

export default function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [claims, setClaims] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    axios
      .get("http://localhost:8000/api/posts/post-items/", {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => setPosts(res.data))
      .catch((err) => {
        console.error("Failed to load MyPosts:", err.response || err);
        setPosts([]);
      });
  }, [token]);

  const handleDelete = (postId) => {
    axios
      .delete(`http://localhost:8000/api/posts/post-items/${postId}/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then(() => {
        setPosts((curr) => curr.filter((post) => post.id !== postId));
      })
      .catch((err) =>
        console.error(`Failed to delete post ${postId}:`, err.response || err)
      );
  };

  const handleViewClaims = (post) => {
    setActivePost(post);
    axios
      .get(`http://localhost:8000/api/claims/?post_item=${post.id}`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => setClaims(res.data))
      .catch((err) => {
        console.error("Failed to fetch claims:", err.response || err);
        setClaims([]);
      });
  };

  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <SideBar />
      <div className="my-posts-container">
        <h2>My Posts</h2>
        {posts.length === 0 ? (
          <p>You haven’t reported any items yet.</p>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => {
              const title = post.category?.name || post.name || "Unnamed";
              const description = post.description;
              const dateFound = post.date_found;
              const imageUrl = post.image || img1;

              return (
                <div key={post.id} className="post-card">
                  <img src={imageUrl} alt={title} className="post-image" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p className="post-date">Found on: {dateFound}</p>
                  <div className="buttons-container">
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(post.id)}
                    >
                      Delete
                    </button>
                    <button onClick={() => handleViewClaims(post)}>
                      View Claims
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activePost && (
          <div className="modal1-container">
            <div className="modal1">
              <h3>Claims for "{activePost.category?.name || activePost.name}"</h3>
              {claims.length === 0 ? (
                <p>No claims submitted yet.</p>
              ) : (
                <ul className="claim-list">
                  {claims.map((claim) => (
                    <li key={claim.id}>
                      <strong>Email:</strong> {claim.owner_email} <br />
                      <strong>Phone:</strong> {claim.owner_phone || "N/A"} <br />
                      <strong>Details:</strong> {claim.message}
                    </li>
                  ))}
                </ul>
              )}
              <button
                className="close-modal-btn"
                onClick={() => setActivePost(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
