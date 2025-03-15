import img1 from'../assets/picture.jpg';
import img2 from'../assets/download1.png';
import '../CSS/FoundItemCard.css';

function FoundItemCard({item , onDetailClick ,onContactClick}){


 return(
  <div className='item-card'>
    <div className='image-container'>
      <img src={img1} alt="item-image" className='item-image'/>
    </div>
    <div className='item-details'>
      <h3>{item.name}</h3>
      <p>found at : {item.place}</p>
      <p> time : {item.time}</p>
        <div className="buttons">
          <button className='contact-btn' onClick={onContactClick}>contact</button>
          <button className='details-btn' onClick={onDetailClick}>details</button>
          {item.isClaimed && 
          <div className='item-claimed'>
            ✔
          </div>}{/*conditional rendering*/
          }
      </div>
    </div>

  </div>
 )
}

export default FoundItemCard;