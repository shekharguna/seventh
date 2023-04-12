import { Card } from "flowbite-react"
import image from "../assets/BABBAGE.jpg"
import image1 from "../assets/socrates.jpg"
import image2 from "../assets/beethoven.jpg"
import image3 from "../assets/ARISTOTLE.jpg"
import { Link } from "react-router-dom"

export default function Card1(){
    return( 
            <div className="flex justify-center align-center my-3"> 
           
      <div className="m-2"> 
        <div className="max-w-sm m1-16 "> 
        <Link to="/bcaproduct">
  <img src="src\assets\BABBAGE.jpg" className="opacity-100 hover:opacity-80"></img> 
  </Link>
  </div> 
</div> 

<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/philosophy">
  <img src="src\assets\socrates.jpg" className="opacity-100 hover:opacity-80"></img> 
  </Link>
  </div> 
</div> 
<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/musicproduct">
  <img src="src\assets\beethoven.jpg" className="opacity-100 hover:opacity-80"></img>
  </Link>
  </div>
</div>
<div className="m-2">
        <div className="max-w-sm m1-16">
        <Link to="/zoology">
  <img src="src\assets\ARISTOTLE.jpg" className="opacity-100 hover:opacity-80"></img>
  </Link>
  </div>
</div>

</div>

    )
}