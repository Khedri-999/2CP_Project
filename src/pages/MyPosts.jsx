import { useState ,useEffect} from "react";
import "../CSS/MyPosts.css"; 
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import axios from 'axios';


/*
 [
  {
    id: 1,
    title: "Student Card Found",
    description: "I found a student card in the library.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5jozk_ak5Xzj25Nr5Uwric1s6TRvwlfUew&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5jozk_ak5Xzj25Nr5Uwric1s6TRvwlfUew&s",
    date: "2025-03-17",
    claimRequests: [
      { id: 103, requester: "userC", message: "I really need my charger back", contact: "+213555555666" }
    ]
  },
  {
    id: 3,
    title: "Student Card Found",
    description: "I found a student card in the library.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5jozk_ak5Xzj25Nr5Uwric1s6TRvwlfUew&s",
    date: "2025-03-18",
    claimRequests: [
      { id: 101,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5jozk_ak5Xzj25Nr5Uwric1s6TRvwlfUew&s", requester: "userA", message: "it my phone ,it is cracked ", contact: "+213555111222" },
      { id: 102, requester: "userB", message: "I lost my card, please help.", contact: "+213555333444" },
      { id: 105, requester: "userA", message: "Is this my card?", contact: "+213555111222" },
      { id: 106, requester: "userB", message: "I lost my card, please help.", contact: "+213555333444" }
    ]
  },
  {
    id: 4,
    title: "Charger Found",
    description: "A charger was left in the cafeteria.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5jozk_ak5Xzj25Nr5Uwric1s6TRvwlfUew&s",
    date: "2025-03-17",
    claimRequests: [
      { id: 103, requester: "userC", message: "I really need my charger back", contact: "+213555555666" }
    ]
  },
 
];
*/



//const samplePosts =

function MyPosts() {
  const [posts, setPosts] = useState([]);

  const [activePost, setActivePost] = useState(null);


  const handleDelete = async (postId) => {
    try {
      await axios.delete(`https://67fd5ab53da09811b1758011.mockapi.io/api/myposts/${postId}`);
      setPosts(posts.filter(post => post.id !== postId));
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, claimsRes] = await Promise.all([
          axios.get("https://67fd5ab53da09811b1758011.mockapi.io/api/myposts"),
          axios.get("https://67fd5ab53da09811b1758011.mockapi.io/api/claims"),
        ]);
  
        const postsData = postsRes.data;
        const claimsData = claimsRes.data;
  
        const postsWithClaims = postsData.map(post => ({
          ...post,
          claimRequests: claimsData.filter(claim => claim.mypostId === post.id),
        }));
  
        setPosts(postsWithClaims);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };
  
    fetchData();
  }, []);
  

  const handleSelectClaim = (postId, claimId) => {
    console.log(`Post ${postId}: Claim ${claimId} selected.`);
    setActivePost(null);
  };



  return (
    <>
    <div className="header">
      <NavBar />
    </div>
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
          
          <div className="buttons-container">
          <button 
            className="claims-btn" 
            onClick={() => setActivePost(post)}>
          Claims
          </button>
          <button 
            className="delete-btn"
            onClick={() => handleDelete(post.id)}>
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
            {activePost.claimRequests && activePost.claimRequests.length > 0 ? (
              activePost.claimRequests.map(claim => (
                <div key={claim.id} className="claim-item">
                  <div className="claim-details-container">
                    <div className="claim-image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxn1cJViyxDRkaKaEC5JT9J3TVYNUIS_XcA&s" className="image-claim"/>
                    </div>
                    <div className="claim-details">
                      <div className="claim-details--claimer">
                        <p><strong>User: </strong>{claim.requester}</p>
                        <p><strong>Contact: </strong>{claim.contact}</p>
                      </div>
                      <p><strong>Message: </strong>{claim.message}</p>
                      
                    </div>
                  </div>
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
