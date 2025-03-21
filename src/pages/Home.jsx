import NavBar from "../components/NavBar";
import FilterBar from "../components/FilterBar";
import FoundItemCard from "../components/FoundItemCard";
import '../CSS/Home.CSS'
import {useState} from "react";
import img1 from'../assets/picture.jpg';


const itemArray= [
  {id:1,poster:'ghacene',type:'found',name:'student card',image:'../assets/download1.png',place:'library',time:"13:05",isClaimed:true,category:'card',discription:'ww'},
  {id:2,poster:'ghacene',type:'found',name:'charger ',image:'../assets/download1.png',place:'risidance',time:"22:05",isClaimed:false,category:'all',discription:'qq'},
  {id:3,poster:'ghacene',type:'found',name:'glasses',image:'../assets/download1.png',place:'cafe',time:"07:25",isClaimed:true,category:'key',discription:'ffff '},
  {id:4,poster:'ghacene',type:'archive',name:'student card',image:'../assets/download1.png',place:'library',time:"13:05",isClaimed:true,category:'card',discription:''},
  {id:5,poster:'ghacene',type:'found',name:'charger ',image:'../assets/download1.png',place:'risidance',time:"22:05",isClaimed:false,category:'all',discription:'rr'},
  {id:6,poster:'ghacene',type:'found',name:'glasses',image:'../assets/download1.png',place:'cafe',time:"07:25",isClaimed:true,category:'key',discription:'ppp'},
  {id:7,poster:'ghacene',type:'found',name:'student card',image:'../assets/download1.png',place:'library',time:"13:05",isClaimed:true,category:'card',discription:'ooo'},
  {id:8,poster:'ghacene',type:'found',name:'charger ',image:'../assets/download1.png',place:'risidance',time:"22:05",isClaimed:false,category:'all',discription:'kkkk'},
  {id:9,poster:'ghacene',type:'found',name:'glasses',image:'../assets/download1.png',place:'cafe',time:"07:25",isClaimed:true,category:'key',discription:'tttt'},
  ]

  function Home() {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedContact,setSelectedContact] =useState(null);

    const filteredItems = itemArray.filter((item) => (selectedFilter === 'all' || item.category === selectedFilter));
  
    document.title='home';

    return (
      <div>
        <div className="header">
          <NavBar />
          <FilterBar setSelectedFilter={setSelectedFilter} />
        </div>
  
        <div className="items-container">
          {filteredItems.map((item) => (
            <FoundItemCard item={item} key={item.id} onContactClick={()=>setSelectedContact(item.poster)} onDetailClick={() => setSelectedItem(item)} />
          ))}
        </div>
  
        {/* diplay the details */}
        {selectedItem && (
          <div className="modal-container">
            <div className="modal">
              <div className="modal-image-container">
                <img src={img1} alt="item-image" className="modal-image" />
              </div>
              <div className="modal-details-container">
                <h3>{selectedItem.name}</h3>
                <p>found at: {selectedItem.place}</p>
                <p>time: {selectedItem.time}</p>
                <p>discription: {selectedItem.discription}</p>
                <button className="close-btn" onClick={() => setSelectedItem(null)}>Close</button>
              </div>
            </div>
          </div>
        )}

        {selectedContact && (
          <div className="form-container">
            <div className="form">
              <input type="tel" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}" placeholder="enter the phone number" maxLength={10}/>
              <p>give some details to prove the ownership:</p>
              <input type="text" className="form-text" onChange={()=>handleChange()} required/>
              <br/>
              <input type="image"/>
              <br/>
              <div className="buttons">
                <button className="close-btn" onClick={()=>setSelectedContact(null)}>close</button>
                <button className="submit-btn" onClick={''}>submit</button>
              </div>
            </div>
          </div>
          )
          
        }
      </div>
    );
  }
  

export default Home;
