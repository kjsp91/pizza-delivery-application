import './Menu.css'

// function Menu(props){
//     return(
//     <div className="card">
//         <img src={props.image} alt="pizza" />
//         <h2>{props.name}</h2>
//         <p>{props.dcpn}</p>
//         <h3>{props.price}</h3>
//         <button>ORDER</button>
//     </div>
//     )
// } 
// export default Menu; 


import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
  const itemDetails = {
    image: props.image,
    name: props.name,
    description: props.dcpn,
    price: props.price,
    // Add other details as needed
  };

  const handleOrderClick = () => {
    // Retrieve existing items from localStorage
    const existingItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    
    // Add the current item to the array
    const updatedItems = [...existingItems, itemDetails];

    // Save the updated array back to localStorage
    localStorage.setItem('selectedItems', JSON.stringify(updatedItems));
  };

  return (
    <div className="card">
      <img src={props.image} alt="pizza" />
      <h2>{props.name}</h2>
      <p>{props.dcpn}</p>
      <h3>{props.price}</h3>
      <Link to="/cart" onClick={handleOrderClick}>
        <button>ORDER</button>
      </Link>
    </div>
  );
}

export default Menu;

