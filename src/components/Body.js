import RestrauntCard,{promotedLabel} from "./RestrauntCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import uselistofRestraunt from "../utils/uselistofRestraunt";
import userContext from "../utils/userContext";
import { useContext } from "react";



const Body=()=>{

    const [searchText,setSearchText]=useState("");

    const {
        listOfRestraunts,
        filteredRestraunt,
        setlistofRestraunts,
        setfilteredRestraunt} = uselistofRestraunt();

      
    
    const RestaurantPromoted=promotedLabel(RestrauntCard); 

    const {loggedInUser,setUserName}=useContext(userContext);


    // console.log("Body rendered", listOfRestraunts);
    
  
   
    //  if(listOfRestraunts.length ===0){
    //     return  <Shimmer/>
    //  }

    // const onlineStatus=useOnlineStatus();

    // if(onlineStatus===false){
    //     return <h1>Seems You're Offline. Try Again.!</h1>
    // }



    return listOfRestraunts.length ===0 ? (<Shimmer/>) : (
    <div className="px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
             <div className="flex w-full md:w-1/2 gap-2 bg-gray-200 p-2 rounded-md" >
            <input type="text" data-testid="searchInput" placeholder="Restaurant Name" className="w-full px-2 py-1 rounded-md outline-none text-gray-700" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button className=" bg-blue-500 m-4 hover:bg-blue-700 text-white px-3 py-1 rounded-md" onClick={
                ()=>{
                    const filterRestraunts= listOfRestraunts.filter((res)=>{
                        return res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                        
                });
                setfilteredRestraunt(filterRestraunts);
                }   
            }>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button className=" bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md" onClick={
                ()=>{
                    const filtered=listOfRestraunts.filter((res)=>{
                    
                        return res.card.card.info.avgRating > 4.5
                    
                    });
                    setfilteredRestraunt(filtered);
                }}>Top Rated Restraunts</button>

        </div>

        <div className="flex items-center">
        <label className="font-semibold">User Name : </label>

        <input className="bg-gray-200 px-2 mx-2 py-1 rounded-md text-gray-700 outline-none" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>

        </div>
            
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
            {/* <RestrauntCard resData={resList[0]} />
            <RestrauntCard resData={resList[1]} /> */}
            {/* const listOfRestaurants = response.restaurants; */}

            
            {filteredRestraunt.map((restraunt) => 
                
                
                <Link className="link" key={restraunt.card.card.info.id}  to={"/restaurants/" + restraunt.card.card.info.id}> 
                { restraunt.card.card.info.promoted ? (<RestaurantPromoted resData={restraunt.card.card}/>) :
                (<RestrauntCard  resData={restraunt.card.card}/>
                )}</Link>
                 
            
            
)}
        
            {/* <RestrauntCard name="The food Box" cuisine="Chinese,Continental" rating="4.5 stars" deliverytime="25 mins"/> */}
        </div>
    </div>
)
}    

export default Body;

