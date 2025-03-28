import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


// const About=() => {
//     return(
//       <div>
//         <h1>About Page</h1>
//         <h3>This is Namaste React Series</h3>
//         {/* <User name={"Tharuni function"} location={"Madurai"} contact={"1234567890"}/> */}
//         <UserClass name={"Tharuni class"} location={"Madurai"} contact={"1234567890"}/>
//       </div>
// )}

class About extends Component{

  constructor(props){
    super(props);
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent Component Mount")
  }

  componentWillUnmount(){
    console.log("Component will be unmounted")
  }

  render(){
    console.log("Parent render");
    return(
      
      <div>
       
        {/* <User name={"Tharuni function"} location={"Madurai"} contact={"1234567890"}/> */}
        <UserClass name={"First class"} location={"Madurai"} contact={"1234567890"}/>
      
        
        
      </div>
      )
  }
}


/*
  Parent Constructor
  Parent Render
       --First Child Constructor
       --First Child Render

       --Second Child Constructor
       --Second Child Render

    <DOM updated In Single Batch>
    --First Child Did Mount
    --Second Child Did Mount
  Parent Did Mount   

*/


export default About;
