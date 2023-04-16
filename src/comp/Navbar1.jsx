import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import image12 from "../assets/logosample.png"
import Image22 from "../assets/search.png"
import Image23 from "../assets/customer.png"


export default function Navbar1(){
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  
    return(
      <>
      
        <Navbar
  fluid={true}
 
  className="bg-zinc-800 mb-2 border-2 border-zinc-700 "
 >
 
  <Navbar.Brand

    to="/navbars"
  >

   
  

   <span className="self-center whitespace-nowrap text-3xl font-algerian text-white">
      EduStyle
    </span>
    
    
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
   
   <div className="flex gap-14 pr-14">
  <Link to="/" className=" font-light text-lg font-sans  text-white hover:text-green-600  ">
      Home
      </Link>
   {/* <Link to="/wishlist" className="font-light text-base font-sans  text-white hover:text-green-600  ">
      Wishlist
    </Link>*/}
      <Link to="/shoppingcart" className="font-light text-lg font-sans  text-white hover:text-green-600">
      Shopping Cart
      </Link>
     {/* <Link to="/checkout" className="font-light text-base font-sans text-white  hover:text-green-600 ">
      Checkout
    </Link> */}
    <Navbar.Link href="/navbars" className="font-light text-lg font-sans  text-white hover:text-green-600 mr-60">
      About
    </Navbar.Link>

    {
isAuthenticated && <p> {user.name} </p>
    }
   
    </div>

  
   {
   isAuthenticated ? (
    <button className="hover:text-green-600 text-white font-light text-lg font-sans" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    Log Out
  </button>
   ) : (
    <button className="hover:text-green-600 text-white font-light text-lg font-sans" onClick={() => loginWithRedirect()}>Log In</button>
   )
   
   }
   
    

   

    <div className="flex flex-row space-x-2 space-x-reverse">
  
    <img src="src\assets\customer.png" className="h-8 w-8 hover:bg-zinc-700"></img>
    </div>
  </Navbar.Collapse>
</Navbar>
</>
    )
}