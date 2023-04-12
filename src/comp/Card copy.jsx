import { Card } from "flowbite-react"
import image5 from "../assets/SIGMUND.jpg"
import image6 from "../assets/HERODETUS.jpg"
import image7 from "../assets/antoine.jpg"
import image11 from "../assets/GEOFFERY.jpg"
import { Link } from "react-router-dom"

export default function Card2(){
    return( 
            <div className="flex justify-center align-center "> 
      <div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/psychology">
  <img src="src\assets\SIGMUND.jpg" className="opacity-100 hover:opacity-80"></img> 
  </Link>
  </div> 
</div> 
<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/chemistry">
  <img src="src\assets\antoine.jpg" className="opacity-100 hover:opacity-80"></img> 
  </Link>
  </div> 
</div> 
<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
        <Link to="/history">
  <img src="src\assets\HERODETUS.jpg" className="opacity-100 hover:opacity-80"></img>
  </Link>
  </div>
</div>
<div className="m-2">
        <div className="max-w-sm m1-16">
        <Link to="/english">
  <img src="src\assets\GEOFFERY.jpg" className="opacity-100 hover:opacity-80"></img>
  </Link>
  </div>
</div>

</div>

    )
}