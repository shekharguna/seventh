import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Image33 from "../assets/eatsleepcode4.png";
import { CartProvider, useCart } from "react-use-cart";
import data from "../data/ChemistryData";
function ItemCard1 (props){
  const { addItem } = useCart();
    return(
      <div>
      <div className="m-2 hover:scale-105">
        <Card imgSrc={props.img} alt={props.title}>
     
      <div >
        <h1 className="text-xl">{props.title}</h1>
       
        <div>
        <p className="font-light text-lg text-gray-800 ">
{props.desc}
    </p>
        <div className="flex flex-row justify-center gap-3">
      

   <p className="font-semibold font-3xl text-green-600">
   Rs {props.price}.0
   </p>
   </div>
          <button
            name="Add to cart"
            class="bg-gray-300 hover:bg-green-600 text-gray-700 hover:text-white font-light text-base py-2 ml-0 mt-2 px-4 w-1/2  rounded-full"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      </Card>
    </div> 
    </div> 
 
 

    )
}
export default function Bcaproduct() {
  return (
    <>
    <p class="text-left font-light text-5xl text-gray-900 mt-6 mb-10 hover:underline">Chemistry Super Store</p>
              <div className="grid grid-cols-3 gap-2">
                {data.productData.map((item, index)=>{
                  return(
                    
                    <ItemCard1 img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                    
                  )
                })}</div>
                <hr class="h-px my-8 bg-zinc-900 border-1 dark:bg-zinc-900"></hr>
    <p class="align-middle mt-8 text-zinc-500 font-sans">Showing: 1-6 of 6 </p>
    </>
  );
}
