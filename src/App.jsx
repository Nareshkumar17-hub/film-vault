import { useEffect, useState } from 'react'
import './App.css' 
import { Routes, Route } from "react-router-dom"
import Home from './pages/home'; 
import Details from './pages/movie_detailes'; 
import WATCHLIST from './pages/watchlist';
import Fav from './pages/favorite'; 
import Log from './pages/log';



function App() {   

  const [watchlist , setwatchlist] = useState([]) 
   const [fav , setfav] = useState([])   
   const [review , setreview] = useState("") 
   const [movielog , setmovielog] = useState([]) 

   



    useEffect( () => {

     const savedfav = localStorage.getItem("savfav") ;

     if(savedfav) {
        setfav(JSON.parse(savedfav))
     }




   }, [])

   useEffect( () => {

     localStorage.setItem("savfav" , JSON.stringify(fav))


   }, [fav])   


    useEffect( () => {

     const savedlog = localStorage.getItem("movielog") ;

     if(savedlog) {
        setmovielog(JSON.parse(savedlog))
     }




   }, [])

   useEffect( () => {

     localStorage.setItem("movielog" , JSON.stringify(movielog))


   }, [movielog])   






  
  
  
   return(



    <>
       
      <Routes> 
        <Route path="/" element={<Home fav={fav} watchlist={watchlist} movielog={movielog}/>} /> 
        <Route path="/movie/:imdbID" element={<Details setwatchlist={setwatchlist} watchlist={watchlist} setfav={setfav} fav={fav} />} />  
        <Route path="/log/:imdbID" element={<Log review={review} setreview={setreview} movielog={movielog} setmovielog={setmovielog}/>}/>

      </Routes>

    
    </>
   )


   ;
      
}

export default App