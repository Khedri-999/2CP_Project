
import '../CSS/FilterBar.css';
import { useState } from 'react';

const filters=['all','card','money','glasses','charger','key','clothes','phone','pc','backpac','others'];
function FilterBar({setSelectedFilter}){
  const [activeFilter,setActiveFilter]=useState('all');

  const handleFilter=(filter)=>{
    setActiveFilter(filter);
    setSelectedFilter(filter);
  }
  return(
    <div className='filter-container'>
      {filters.map((filter)=>(
        <button 
        className={filter===activeFilter ? 'active':''}
        onClick={()=>handleFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
export default FilterBar;
