import React, { useEffect, useState } from "react";
import cloudicon from "./assests/cloud.png";

const Wether = () => {
const[city,setcity]=useState()
const[search,setsearch]=useState("jaipur")

  const handelchange = (e) => {
    setsearch(e.target.value)
  };

  useEffect(() => {
    const fatchApi = async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q= ${search}&units=metric&appid=9b1f40aef210dafd9384d33597a1d103`
          const response = await fetch(url);
        const resJson = await response.json();
        setcity(resJson.main)
    }
    fatchApi();
  },[search]);


  return (
    <>
      <div className="bg-blue-100 min-h-screen ">

        <div className="h-96 flex flex-col items-center justify-center" >
          <input
            type="search"
            className="bg-black mx-2 my-14 mb-0 rounded-md h-10 w-64 px-5 outline-none text-white "
            placeholder="search.."
            value={search}
            onChange={handelchange}
          />
          <img className="h-40 w-40  my-10 lg:block" id="cloudicon" src={cloudicon} alt="" />
          </div>


{!city ?(
    <p>no data found</p>
):(
    <>
  <div className="h-20">
          <h1 className="font-bold text-sky-950 text-3xl py-6">
            {search}</h1>
          </div>
 
          <div className="h-20">
          <h1 className="font-bold text-sky-950 text-3xl py-8">{city.temp}°Cel</h1>
          </div>
          <div className="h-10">
          <h1 className="font-bold text-sky-950 text-md py-2 ">Min :{city.temp_min}°Cel | Max :{city.temp_min}°Cel</h1>
          </div>
    </>
)}
  
      </div>
    </>
  );
};

export default Wether;

              
