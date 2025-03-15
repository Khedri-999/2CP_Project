import '../CSS/Bar.css'

function Bar({setSelectedType}){

  return(
    <div className='bar'>
      <button className='found-btn'onClick={()=>setSelectedType('found')}>FOUND</button>
      <button className='lost-btn' onClick={()=>setSelectedType('lost')}>LOST</button>
      <button className='archive-btn' onClick={()=>setSelectedType('archive')}>ARCHIVE</button>
    </div>
  )
}

export default Bar;