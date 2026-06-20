 import { Route , Router , BrowserRouter, useNavigate } from "react-router-dom"; 


function HomeButton() {

   const navigate = useNavigate() ;  
   const mystyle = {
     position : "absolute" , 
     top: "5px" , 
    
     


   }
  
return(

  <>
     <button onClick={ () => {
        navigate("/")
          
     } } style={mystyle} className=" bg-red-600 font-bold p-2 rounded-xl right-5">HOME</button>
    
  
  </>

 



)





} 

export default HomeButton