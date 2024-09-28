import React from 'react'

const Womencollection = (props) => {
    const{title,image1,image2,image3,image4}=props.ladiesfashion
  return (
    <div className='womencollectionsection'>
      <h2>{title}</h2>
      <div>
      <img src='assets/shop/laddiesbanner.jpg' alt='laddies banner'></img></div>
    <div className='womenimages'>
      <img src={image1} alt={title}></img>
      <img src={image2} alt={title}></img>
      <img src={image3} alt={title}></img>
      <img src={image4} alt={title}></img>
      </div> 
    </div>
  )
}

export default Womencollection