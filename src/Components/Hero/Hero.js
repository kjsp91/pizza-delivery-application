import './Hero.css'

function Hero(){
    return(
        <div className="container">
      <div className="banner">
        
        <div className="sect1">
        {/* <h1>Its PIZZA Time....</h1>  */}
        <h1>Your Favourite Pizza Is Ready For Delivery <br /> &#128757;&#128757;</h1>
        {/* <h3>What are you waiting for ?</h3> */}
        {/* <h2>Order Quick <br />Receive Quick</h2> */}
         </div>
         <div className="sect2">
        {/* <img src="https://media.istockphoto.com/photos/delicious-italian-pizza-picture-id1031362212?k=6&m=1031362212&s=612x612&w=0&h=DTR9PxumavRKvB_C3aYrJ8NPR_B9tWUXMOFKNTZemyI=" alt="banner" /> */}
        <img src="https://png.pngtree.com/background/20230426/original/pngtree-pizza-with-red-tomatoes-on-black-background-picture-image_2486444.jpg" alt="banner" />
      </div>
      </div>
      <hr />
    </div>
    )
}
export default Hero;