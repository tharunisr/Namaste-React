import RestrauntCard,{promotedLabel} from "./RestrauntCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import uselistofRestraunt from "../utils/uselistofRestraunt";
import userContext from "../utils/userContext";
import { useContext } from "react";



//Normal JS Variable
// let listOfRestraunts2=[
//     {
//     info:{
//         "id": "84524",
//         "name": "Arumugam Mess",
//         "cloudinaryImageId": "fthkmds1nusngnbto3e3",
//         "costForTwo": "₹450 for two",
//         "cuisines": [
//           "Biryani",
//           "Grill",
//           "Chinese",
//           "South Indian",
//           "North Indian",
//           "Fast Food"
//         ],
//         "avgRating": 3.3,
//         sla:{
//             "deliveryTime": 29
//             }
          
//         }},
//     {

//     info:{
//         "id": "84525",
//         "name": "Sankar Mess",
//         "cloudinaryImageId": "fthkmds1nusngnbto3e3",
//         "costForTwo": "₹450 for two",
//         "cuisines": [
//           "Biryani",
//           "Grill",
//           "Chinese",
//           "South Indian",
//           "North Indian",
//           "Fast Food"
//         ],
//         "avgRating": 4.4,
//         sla:{
//                 "deliveryTime": 29
//         }
//     }},
//     {
//     info:{
//         "id": "84526",
//         "name": "Kumar Mess",
//         "cloudinaryImageId": "fthkmds1nusngnbto3e3",
//         "costForTwo": "₹450 for two",
//         "cuisines": [
//           "Biryani",
//           "Grill",
//           "Chinese",
//           "South Indian",
//           "North Indian",
//           "Fast Food"
//         ],
//         "avgRating": 4.4,
//         sla:{
//                 "deliveryTime": 29
//         }
          
//     }
//     }]





const Body=()=>{

    const [searchText,setSearchText]=useState("");

    const {
        listOfRestraunts,
        filteredRestraunt,
        setlistofRestraunts,
        setfilteredRestraunt} = uselistofRestraunt();
    
    const RestaurantPromoted=promotedLabel(RestrauntCard); 

    const {loggedInUser,setuserName}=useContext(userContext)




    


    // console.log("Body rendered", listOfRestraunts);
    
  
   
    //  if(listOfRestraunts.length ===0){
    //     return  <Shimmer/>
    //  }

    // const onlineStatus=useOnlineStatus();

    // if(onlineStatus===false){
    //     return <h1>Seems You're Offline. Try Again.!</h1>
    // }



    return listOfRestraunts.length ===0 ? (<Shimmer/>) : (
    <div className="">
        <div className="flex">
             <div className="m-4 p-4 flex items-center" >
            <input type="text" className="border border-black" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button className="px-2 py-1 bg-blue-300 rounded-md m-4" onClick={
                ()=>{
                    const filterRestraunts= listOfRestraunts.filter((res)=>{
                        return res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                        
                });
                setfilteredRestraunt(filterRestraunts);
                }   
            }>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button className="px-2 py-1 bg-gray-300 rounded-md" onClick={
                ()=>{
                    const filtered=listOfRestraunts.filter((res)=>{
                    
                        return res.card.card.info.avgRating > 4.5
                    
                    });
                    setfilteredRestraunt(filtered);
                }}>Top Rated Restaurant</button>

        </div>

        <div className="m-4 p-4 flex items-center">
        <label>UserName : </label>
        <input className="border border-black m-5" value={loggedInUser} onChange={(e)=>setuserName(e.target.value)}></input>

        </div>
            
        </div>
        <div className="flex flex-wrap ">
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

