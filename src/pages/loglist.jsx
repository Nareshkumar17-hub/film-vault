 import Log from "./log";

 function Loglist({ movielog }) {
  return (
    <> 

       <h1 className=" text-3xl md:text-6xl p-8 font-bold text-center">MY movie logs</h1> 
       {movielog.length === 0 ? <h4 className=" text-center p-2 text-xl ">no movie logged</h4> : ""}
      {movielog.map((item, index) => (
       <div className="flex gap-5 w-full flex-col md:flex-row"  key={index}>

         <div className="flex gap-2 m-8 flex-wrap md:flex-nowrap">
         <div className="w-full">
          <img src={item.Poster} className="w-32 h-32  md:h-64 md:w-64" /> 
         </div>
         <div className=" flex flex-col gap-2"> 
          <h3 className=" text-2xl  md:text-6xl font-bold">{item.Title}</h3> 
          <h4 className="font-bold">{item.date}</h4>
          <p className=" md:font-bold md:text-xl text-justify">{item.review}</p>
          
          </div>
        </div>


       </div>
      ))}
    </>
  );
} 


export default Loglist