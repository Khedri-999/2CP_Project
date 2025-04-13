import { useState } from "react";
import "../CSS/MyPosts.css"; 
import SideBar from "../components/SideBar";


// Sample data representing user posts with claim requests received.
const samplePosts = [
  {
    id: 1,
    title: "Student Card Found",
    description: "I found a student card in the library.",
    image: "../assets/download1.png",
    date: "2025-03-18",
    claimRequests: [
      { id: 101, requester: "userA", message: "Is this my card?", contact: "+213555111222" },
      { id: 102, requester: "userB", message: "I lost my card, please help.", contact: "+213555333444" }
    ]
  },
  {
    id: 2,
    title: "Charger Found",
    description: "A charger was left in the cafeteria.",
    image: "../assets/download1.png",
    date: "2025-03-17",
    claimRequests: [
      { id: 103, requester: "userC", message: "I really need my charger back", contact: "+213555555666" }
    ]
  },
  // Add more posts as necessary
];

function MyPosts() {
  // State to hold all posts made by the user
  const [posts, setPosts] = useState(samplePosts);
  // State to open and control the popup modal for claim requests
  const [activePost, setActivePost] = useState(null);

  // Callback when a claim request is selected from the popup modal
  const handleSelectClaim = (postId, claimId) => {
    // Here you can handle selection logic, like updating the status of the post,
    // notifying the claimant, etc.
    console.log(`Post ${postId}: Claim ${claimId} selected.`);
    // For instance, you might remove the post from the list once a claim is accepted:
    setPosts(posts.filter(post => post.id !== postId));
    // Close the modal
    setActivePost(null);
  };

  return (
    <>
    <SideBar/>
    <div className="my-posts-container">
    <h2>My Posts</h2>
    <div className="posts-grid">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <img src={post.image} alt={post.title} className="post-image" />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p className="post-date">Posted on: {post.date}</p>
          {/* Button opens the modal showing claim requests */}
          <button 
            className="claims-btn" 
            onClick={() => setActivePost(post)}>
            View Claims
          </button>
        </div>
      ))}
    </div>

    {/* Modal for displaying claim requests */}
    {activePost && (
      <div className="modal-container">
        <div className="modal">
          <h3>Claim Requests for "{activePost.title}"</h3>
          <div className="claim-list">
            {activePost.claimRequests && activePost.claimRequests.length > 0 ? (
              activePost.claimRequests.map(claim => (
                <div key={claim.id} className="claim-item">
                  <p><strong>User: </strong>{claim.requester}</p>
                  <p><strong>Message: </strong>{claim.message}</p>
                  <p><strong>Contact: </strong>{claim.contact}</p>
                  <button 
                    className="select-claim-btn"
                    onClick={() => handleSelectClaim(activePost.id, claim.id)}>
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
            onClick={() => setActivePost(null)}>
            Close
          </button>
        </div>
      </div>
    )}
  </div></>
  );
}

export default MyPosts;
