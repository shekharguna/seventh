import React from "react";


export default function Search() {
    return (<>
     <div className="pt-1 relative mx-auto text-gray-600 mb-2">
        <input className="border-0 border-gray-300 bg-gray-200 hover:bg-gray-100 h-10 px-15 pr-16 pl-16 rounded-1lg text-sm focus:outline-none w-196"
          type="search" name="search" placeholder="Search" />  
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
 
        </button>
       
      </div>
      
      </>
    );
}