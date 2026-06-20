import { useState , useEffect, use} from "react";
import {  useParams   } from "react-router-dom";  
import { useNavigate } from "react-router-dom"; 
import HomeButton from "./homebutton";




function Details( {watchlist ,setwatchlist , fav , setfav}) {
    const {imdbID} =  useParams(); 

    const [padangal , setpadangal] = useState({}) 

    const alreadyexist = fav.some(fav => fav.imdbID === padangal.imdbID) 
    const alreadylisted = watchlist.some(watchlist => watchlist.imdbID === padangal.imdbID)

    useEffect(() => {

             fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=9b114858`)
             .then(Response => Response.json())
             .then(data => setpadangal(data))



    } , [imdbID]) 


    const navigate = useNavigate(); 



    


    return(

      <>   
         
         <div className="bg-black flex justify-evenly text-white h-[600px] w-full gap-4  flex-wrap md:flex-nowrap">
              <img src={padangal.Poster} key={padangal.imdbID} alt={padangal.Title} className=" h-60 w-60 md:h-[400px] md:w-[400px] m-2"/>  

              <div className="flex flex-col gap-3 m-2 md:m-0 text-justify">
                <h1 className=" md:text-7xl font-bold ">{padangal.Title}</h1> 
                <p className="md:text-2xl">{padangal.Plot}</p> 
                <h3 className="md:text-3xl bg-orange-600 text-black">{padangal.Awards}</h3>
                <h3 className="md:text-2xl">CAST: {padangal.Actors}</h3> 
                <div className=" flex gap-2 md:gap-4 ">
                    <button className='bg-blue-400 text-white text-bold md:p-2 rounded-xl' onClick={() => { alreadylisted ? alert("allready listed") : setwatchlist([...watchlist, padangal      ]) }} >ADD TO WATCHLIST</button>
                     <button className='bg-red-700 text-white text-bold md:p-2 rounded-xl' onClick={() => {alreadyexist ? alert("already added") : setfav([...fav, padangal ]) , alreadyexist == false ? alert(" movie added") : ""}} >ADD TO FAVORITE</button> 
                     <button className="bg-white text-black rounded-xl md:p-2" onClick={ () => {navigate( `/log/${padangal.imdbID}`)}}>Log movie review</button>
                </div> 
      
              </div>  
            
           
                
            
             <HomeButton />
         </div>
         

         
      
      </>

    ) 

    

} 
export default Details