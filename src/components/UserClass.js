import React from "react";
import userContext from "../utils/userContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state=
        {
           userInfo:{
            name:"dummy",
            location:"default",
            avatar_url:"default.jpg",
            
           
           }
            
        }
        // console.log(props);
        console.log( this.props.name + " Child Constructor")
    }

    async componentDidMount(){
        console.log(this.props.name + " Component Mount ");
        const data=await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();
        this.setState(({
            userInfo : json
        }))
        
    }
    // componentDidMount(){
    //     this.timer=setInterval(()=>{
    //         console.log("set inteval")
    //     },1000);
    // }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
    }

    render()
    {
        const {name,location,avatar_url}=this.state.userInfo;
       
        console.log(this.props.name + " Child render");

        return <div className="m-4 p-4 border border-black">
           
            <img src={avatar_url} className="w-72"></img>
            <h2 className="py-1">Name : {name}</h2>
          
            <userContext.Consumer>{({loggedInUser})=>(
                  <div>
                <h1 className="text-xl font-bold py-2">{loggedInUser}</h1>
                </div> 
            )}
            </userContext.Consumer>
           
            
            <h3 className="py-0">Location : {location}</h3>
           
          
          
        </div>
    }
}

export default UserClass;