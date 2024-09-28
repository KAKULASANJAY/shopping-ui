import React from 'react'

const Header = () => {
  return (
    <div className="headersection">
      <div className="left">
       <div className="title">
        <h2>shopping </h2>
      </div>
    </div>
     <nav className='center'>
        <ul>
            <li> woman</li>
            <li> men</li>
            <li> kids</li>
            <li> beauty</li>
        </ul>
      </nav>
      <div className='search'>
        <input type='text' placeholder='search..'/>
      </div>
      <div className='right'>
      <div className='signin'>
      Sign In / Sign Out
     </div>
     <div className='cart'>
     Cart
   </div>
  </div>
 </div>      
  );
};
export default Header;