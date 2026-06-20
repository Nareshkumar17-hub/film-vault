 import { useState , useEffect } from "react";
 import { data, useParams } from "react-router-dom";



 function WATCHLIST({watchlist}) {
    
    const heading = "My Watch-list"


    return(

      <> 
      
      <h1 className="text-5xl p-8 font-bold text-center">{heading}</h1> 

      <h1 className="text-white text-5xl text-center bg-red-600">{watchlist.length === 0 ? "No movies listed" :""}</h1>
      <div className="h-[100%] w-full grid md:grid-cols-5 gap-5 grid-cols-2 justify-items-center">
        {watchlist.map((watch , index) => <img src={watch.Poster} key={index} className=" w-52 h-52 md:h-[400px] md:w-[200px] " /> )}
      </div>
      </>
      



    )
 } 
 export default WATCHLIST