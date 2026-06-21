 import { useState , useEffect } from "react";
 import { data, useParams } from "react-router-dom";



 function WATCHLIST({watchlists , setwatchlists}) {
    
    const heading = "My Watch-list" 
  
    console.log(watchlists)


    return(

      <> 
      
      <h1 className="md:text-5xl text-2xl p-8 font-bold text-center">{heading}</h1> 

     
      <div className="h-[100%] w-full grid md:grid-cols-5 gap-5 grid-cols-2 justify-items-center">
        {watchlists.map((watch , index) => <div> <img src={watch.Poster} key={index} className=" w-32 h-32 md:h-[400px] md:w-[200px] " />  <button onClick={() => { setwatchlists( watchlists =>  watchlists.filter(watchlist => watch.imdbID !== watchlist.imdbID))  }}  className="p-1 border  bg-transparent text-white hover:bg-white hover:text-black transition-all border-solid w-full">watched?</button> </div> )} 
       
      </div>
      </>
      



    )
 } 
 export default WATCHLIST