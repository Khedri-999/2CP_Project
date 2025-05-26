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
      .then((res) => {
        setClaims(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch claims:", err.response || err);
        setClaims([]);
      });
  };

  

const handleSelectClaim = async (postId, selectedClaimId) => {
  if (!token) return;
  try {
    await axios.post(
      `http://localhost:8000/api/claims/${selectedClaimId}/select/`,
      {},
      { headers: { Authorization: `Token ${token}` } }
    );

    const res = await axios.get(
      `http://localhost:8000/api/claims/?post_item=${postId}`,
      { headers: { Authorization: `Token ${token}` } }
    );
    setClaims(res.data);

    setActivePost(null);
    alert("Claim accepted; all others have been rejected.");
  } catch (err) {
    console.error("Error selecting claim:", err.response || err);
    alert("Failed to update claim statuses. Please try again.");
  }
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
              <h3>
                Claim Requests for "
                {activePost.category?.name || activePost.name}"
              </h3>

              <div className="claim-list">
                {claims.length > 0 ? (
                  claims.map((claim) => (
                    <div key={claim.id} className="claim-item">
                      <div className="claim-details-container">
                        <img
                          src={claim.image || "https://via.placeholder.com/80"}
                          alt="claimer"
                          className="image-claim"
                        />
                        <div className="claim-details">
                          <p>
                            <strong>User:</strong> {claim.requester_email}
                          </p>
                          <p>
                            <strong>Contact:</strong>{" "}
                            {claim.requester_phone || "N/A"}
                          </p>
                          <p>
                            <strong>Message:</strong> {claim.message}
                          </p>
                          <p>
                            <strong>Status:</strong>{" "}
                            {claim.status.toUpperCase()}
                          </p>
                        </div>
                      </div>

                      {claim.status === "pending" && (
                        <button
                          className="select-claim-btn"
                          onClick={() =>
                            handleSelectClaim(activePost.id, claim.id)
                          }
                        >
                          Select Claim
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="empty-claims">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="No claims"
                    />
                    <p>No claim requests received.</p>
                  </div>
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
