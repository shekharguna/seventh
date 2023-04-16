import Carousel1 from "../comp/Carousel"
import Card1 from "../comp/Card"
import Card2 from "../comp/Card copy"
import { Link } from "react-router-dom"
import Image16 from "../assets/popular.jpg"
import image17 from "../assets/tagline.jpg"
import Image18 from "../assets/tshirtsq.jpg"
import Image19 from "../assets/CASE.jpg"
import Image20 from "../assets/hoodiessq.jpg"
import Image21 from "../assets/tagline1.gif"


export default function Home(){
    return(
        <>
        <div>
    <Carousel1></Carousel1>
   <Card1></Card1>
   <Card2></Card2>
 
    
 
   </div>
   <img src="src\assets\tagline.jpg" className="py-3"></img>
   <img src="src\assets\popular.jpg" className="py-3"></img>
   <div className="grid grid-cols-3 gap-4 max-w-7xl">
   <Link to="/tshirtprod">
   <img src="src\assets\tshirtsq.jpg"></img>
   </Link>
   <Link to="/caseprod">
   <img src="src\assets\CASE.jpg"></img>
   </Link>
   <Link to="/hoodieprod">
   <img src="src\assets\hoodiessq.jpg"></img>
   </Link>
   </div>
   <img src="src\assets\tagline1.gif" className="py-3"></img>
   </>
    )
}