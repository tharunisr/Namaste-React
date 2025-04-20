import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestrauntCard=(props)=>{
    // console.log(props);
    const {loggedInUser}=useContext(userContext)
    const{resData}=props;
    const{name,cuisines,avgRating,cloudinaryImageId}=resData?.info;
    return <div data-testid="resCard" className="m-4 ml-7 p-4 w-[260] bg-gray-200  h-[450] hover:bg-gray-300 rounded-md">
        
        <img className="rounded-2xl w-[280] h-[186]" 
        src={CDN_URL + cloudinaryImageId ? CDN_URL + cloudinaryImageId : "https://media-assets.swiggy.com/swiggy/image/upload/dls-web/assets/images/placeholder-light.png"  }></img>  
         <h3 className="font-bold py-2 text-lg mt-2 p-1">{name}</h3>
         <span className="bg-green-600 h-6 w-6 rounded-xl inline-block text-center text-white">☆</span>
         <span> {avgRating} • {resData.info.sla.slaString}</span>
         <h4 className="mt-2 py-1">{cuisines.join(", ")}</h4>
         <h4>User :  {loggedInUser}</h4>
    </div>
}

export default RestrauntCard;


export const promotedLabel=(RestrauntCard)=>{
    return (props)=>{
        return(
            <div className="relative">
                <h1 className="bg-[#f4dddd] text-[#f15555] rounded-sm px-1 font-thin absolute bottom-[425] left-5 text-lg">Ad</h1>
                <RestrauntCard{...props} />
            </div>
        )
    }
}

/*
*       Constructor Called
*       Render -- dummy data

*       Component Did Mount(Api call)
*       this.setState()  --- state variable is updated
*       Render

*       Component Did update
*       Component Will Unmount
*



*/

