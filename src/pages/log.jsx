import { Route , Router , BrowserRouter, data } from "react-router-dom"; 
import { useParams } from "react-router-dom"; 
import { useState , useEffect } from "react";  
import HomeButton from "./homebutton";
 


function Log( {review , setreview , setmovielog , movielog}) {

 const {imdbID} = useParams() ;   

 const [loggedposter , setloggedposter] = useState([]) 

 const [showinput , setshowinput] = useState(false) 
 const [date , setdate] = useState("")

 useEffect(() => {
     
          fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=9b114858`) 
          .then(Response  => Response.json())
          .then(data => setloggedposter(data))
  


 } , [imdbID]) 



 function handlereview(e) {
     
               setreview(e.target.value)  

       } 

      
 function logmovie() {
  setmovielog(prev => [
    ...prev,
    {
      id: imdbID,
      poster: loggedposter.Poster,
      title: loggedposter.Title,
      review: review ,
      date : date
    }
  ]);

  setshowinput(false); 
  alert("movie logged")
}

 return(


  <>  
   <HomeButton/>
  
   <div className="flex gap-10 flex-wrap ">
    <div>
     <img src={loggedposter.Poster} alt="poster" className=" w-52 h-52 md:h-[400px] md:w-[300px]" />
    </div> 
     
    <div> 

      
     <div className=" flex gap-3 flex-wrap">
       <textarea onChange={handlereview} md:rows={5} md:cols={60}  rows={3} cols={40}className="text-black" ></textarea>
      <input type="date" className="text-black" onChange={(e) => {setdate(e.target.value)}}/>


       <button onClick={logmovie}  className=" text-white m-2 p-2 rounded-xl bg-blue-500">LOG Movie</button> 
       
      
     </div>




    </div>  

   </div>
  
  
  </>


 )
 



} 

export default Log