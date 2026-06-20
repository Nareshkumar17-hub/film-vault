  import { Route , Router , BrowserRouter , useNavigate } from "react-router-dom"
 
 function Fav ({fav}) { 

   const navigate = useNavigate() ;

       return(


          <> 

          <h1 className=" text-2xl md:text-6xl p-8 text-center">My favourite Movies</h1> 

     <h3 className=" text-center" >{fav.length ===0 ? "no movies listed" :  ""}</h3>
           <div  className=" grid md:grid-cols-4  grid-cols-3 justify-items-center gap-3 md:gap-5">
           
              {fav.map((favmovie , index) => <img src={favmovie.Poster} key={favmovie.imdbID} className="  w-36 h-36 md:h-[400px] md:w-[200px]" onClick={() => navigate(`/movie/${favmovie.imdbID}`)} /> )}

           </div>
               
            
          
          </>
     


       )  
  


 } 

 export default Fav