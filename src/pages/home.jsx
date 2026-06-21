   import { useState , useEffect } from "react"
   import Nav from "../Nav"
   import { useNavigate } from "react-router-dom" 
   import Fav from "../pages/favorite";
    import WATCHLIST from "./watchlist"; 
import Log from "./log";
import Loglist from "./loglist";
    
 
 function Home ({fav , watchlists , setwatchlists , movielog}) {
    

const navigate =  useNavigate();
    
 const [search ,  setsearch] = useState("")   
   const [movies , setmovies] = useState([])  
  

   useEffect(() => { 
      
     if(!search) {
        setmovies([]) 
        return
     }

       fetch(`https://www.omdbapi.com/?s=${search}&apikey=9b114858`)
       .then(Response => Response.json())
       .then(data => setmovies(data.Search || []))



   }, [search]) 







   
   
   return(

     <> 
     <div className='bg-black'>
      <Nav setsearch={setsearch} search={search} /> 
       { fav.length > 0? <Fav fav={fav}/> : ""} 
    
    { watchlists.length >  0? <WATCHLIST watchlists={watchlists} setwatchlists={setwatchlists}/> : ""}  
     <Loglist movielog={movielog}/>
      <div className='bg-black  z-50 absolute top-20'> 
            
            <div  className='grid grid-cols-1 md:grid-cols-4 gap-4  overflow-scroll w-full'>
              {movies.map(movie => <div className="flex justify-evenly md:flex-col  " onClick={() => navigate(`/movie/${movie.imdbID}`)}> <img src={movie.Poster} key={movie.imdbID} alt={movie.Title} className=' w-24 h-24   md:w-[200PX] md:h-[300px] ' onClick={() => navigate(`/movie/${movie.imdbID}`)} /> <h4>{movie.Title}</h4> </div>)} 
              
            </div>

      </div> 

      </div>   


              
      
   
      
     
</>

    )
 } 

 export default Home