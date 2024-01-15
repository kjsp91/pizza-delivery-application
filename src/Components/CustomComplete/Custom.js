import Toppings from '../../Toppings'
import './Custom.css'
import Customize from '../Customize/Customize'
import { useState } from 'react'


function Custom(){
  const [selectedTopping,setSelectedToppings] = useState([]);
  const [tname,setTname] = useState([])
  const [flag,setFlag] = useState(false)
  function func(){
    console.log(tname)
  }
  function selectedItems(topp,name){
    setFlag(true)
    console.log(topp)
    console.log(name)
    setSelectedToppings([...selectedTopping,topp])
    setTname([...tname,name])
  }
    return(
        <>
        <h1>Customize Your Own Pizza</h1>
        <div className="head">
        {Toppings.map((i)=><Customize key={i.id} id = {i.id} image = {i.image} pname = {i.pname} addFunc={selectedItems}/>)}
        </div>
        <div className="foot">
          {selectedTopping.map((t,index)=>(
            <img src={t} alt="selected toppings" key={index} />
          ))}
        </div>
        {flag && <button className='addb' onClick={func}>Add these Toppings</button>}
        </>         
    )
}

export default Custom;

