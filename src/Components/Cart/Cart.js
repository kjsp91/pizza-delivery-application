import './Cart.css' 
//  import { useLocation } from 'react-router-dom';
// function Cart(props){
//   const location = useLocation()
// //   const {from} = location.state 
// //   console.log(from)
// console.log(location);

//     return(
//         <>
//         <div className="item">
//             <img src={props.pimage} alt="" />
//             <h2>{props.iname}</h2>
//             <p>{props.price}</p>
//         </div>
//         </>
//     )
// }
// export default Cart;

import React, { useEffect, useState } from 'react';

function Cart() {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Retrieve items from localStorage
    const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    setSelectedItems(storedItems);
  }, []);

  function removeItem(keys){
    // console.log(selectedItems[keys.index]);
    // console.log(keys.index)
    const updatedItems = [...selectedItems]
    updatedItems.splice(keys.index,1);
    setSelectedItems(updatedItems)
    localStorage.setItem('selectedItems',JSON.stringify(updatedItems)) 
  }
  
  return (
    <div className='cart'>
      {selectedItems.map((item, index) => (
        <div>
        <div key={index} className="item">
          <img src={item.image} alt="" />
          <div className="block">
          <h3>{item.name}</h3> 
          <p>{item.description}</p>
          </div>
          <p>{item.price}</p>
          <button onClick={()=>removeItem({index})}>X</button>
        </div>
        <hr />
        </div>
      ))}
    </div>
  );
}

export default Cart;
