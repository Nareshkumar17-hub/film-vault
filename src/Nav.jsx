import { useState } from "react";

function Nav({handleResult , setsearch , search}) {

   return(

         <>
           <div className="flex bg-red-700 gap-2 p-5 justify-between text-white"> 
            <h1 className=" md:text-3xl">Film-vault</h1> 
            
         <div>
           < label className="text-white">search here :</label>       <input onChange={(e) =>  setsearch(e.target.value) } className="text-black scale-80 md:scale-100 " ></input>
         </div>
              


           </div>
          
         
         </>
   
  
   );



} 
export default Nav