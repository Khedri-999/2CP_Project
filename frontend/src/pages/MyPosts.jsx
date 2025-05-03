import { useState, useEffect } from "react";
import "../CSS/MyPosts.css";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import axios from "axios";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/", {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => setPosts(res.data))
      .catch(console.error);
  }, [token]);

  const handleDelete = (postId) => {
    axios
      .delete(`http://localhost:8000/api/posts/${postId}/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then(() => {
        setPosts((p) => p.filter((post) => post.id !== postId));
      })
      .catch(console.error);
  };

  const handleSelectClaim = (postId, claimId) => {
    console.log(`Post ${postId}: Claim ${claimId} selected.`);
    // You could call a PATCH here to update claim.status = 'accepted'
    setActivePost(null);
  };

  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <SideBar />
      <div className="my-posts-container">
        <h2>My Posts</h2>
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <img
                src={`http://localhost:8000${post.image}`}
                alt={post.title}
                className="post-image"
              />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p className="post-date">Posted on: {post.date}</p>
              <div className="buttons-container">
                <button
                  className="claims-btn"
                  onClick={() => setActivePost(post)}
                >
                  Claims ({post.claimRequests.length})
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {activePost && (
          <div className="modal1-container">
            <div className="modal1">
              <h3>Claim Requests for "{activePost.title}"</h3>
              <div className="claim-list">
                {activePost.claimRequests.length > 0 ? (
                  activePost.claimRequests.map((claim) => (
                    <div key={claim.id} className="claim-item">
                      <div className="claim-details-container">
                        <img
                          src="https://via.placeholder.com/80"
                          className="image-claim"
                          alt="claimer"
                        />
                        <div className="claim-details">
                          <p>
                            <strong>User:</strong> {claim.requester}
                          </p>
                          <p>
                            <strong>Contact:</strong> {claim.contact}
                          </p>
                          <p>
                            <strong>Message:</strong> {claim.message}
                          </p>
                        </div>
                      </div>
                      <button
                        className="select-claim-btn"
                        onClick={() =>
                          handleSelectClaim(activePost.id, claim.id)
                        }
                      >
                        Select Claim
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No claim requests received.</p>
                )}
              </div>
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

export default MyPosts;
