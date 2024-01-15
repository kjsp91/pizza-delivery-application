import './Customize.css'
import imge1 from '../../assets/tomato-slice.png'
import imge2 from '../../assets/mushrooms.png'
import imge3 from '../../assets/food.png'
import imge4 from '../../assets/capsicum.png'
import imge5 from '../../assets/olives.png'
import imge6 from '../../assets/paneer-tikka.png'
import imge7 from '../../assets/cheese.png'
import imge8 from '../../assets/pineapple.png'
function Customize(props){
    //   const { id, image, pname, onToppingSelect } = props;
    function adding(){
        const array = [imge1,imge2,imge3,imge4,imge5,imge6,imge7,imge8]
        const index = props.id - 1
        props.addFunc(array[index],props.pname); 
    }
    return(
        <>
            <div className="items">
                <img src={props.image} alt="base" /><br />
                <button onClick={adding}>ADD</button>
            </div> 
        </>
    )
} 
export default Customize; 

