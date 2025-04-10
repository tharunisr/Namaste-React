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
    // console.log("Parent Constructor")
  }
  componentDidMount(){
    // console.log("Parent Component Mount")
  }

  componentWillUnmount(){
    // console.log("Component will be unmounted")
  }

  render(){
    console.log("Parent render");
    return(
      <div>
      <div className="font-bold text-xl mb-2 text-center m-4 p-4">Delight – A React-Based Food Ordering Website</div>
      <div className="flex items-center justify-center">
      <div className="max-w-screen-xl rounded overflow-hidden shadow-lg flex">
        <div className="px-16 py-8">
          {/* <User name={"Tharuni function"} location={"Madurai"} contact={"1234567890"}/> */}
          {/* <UserClass name={"First class"} location={"Madurai"} contact={"1234567890"}/> */}
          <p>I built a responsive food ordering website where users can explore various dishes, view details, and add items to a cart. The UI is designed for a smooth user experience with attractive food visuals.</p>
          <div>
            <h3 className="font-bold text-xl py-2">Technologies Used</h3>
            <ol className="list-decimal">
                <li><strong>React.js</strong> – For building the user interface using component-based architecture to handle dynamic content like food items and cart updates.</li>
                <li><strong>JavaScript (ES6+)</strong> – For adding interactivity, handling user actions, and rendering dynamic content.</li>
                <li><strong>HTML5 & CSS3</strong> – For structuring and styling the website with responsive layouts using Flexbox/Grid.</li>
                <li><strong>React Router</strong> – For enabling navigation between pages like Home, Menu, Cart, and About without page reloads.</li>
                <li><strong>useState & useEffect Hooks</strong> – To manage component state and perform side effects like data fetching.</li>
                <li><strong>Responsive Design</strong> – Implemented with CSS media queries or frameworks like Bootstrap/Tailwind for mobile-friendly UI.</li>
                <li><strong>Context API / Redux</strong> (if used) – For managing global state such as cart data across multiple components.</li>
                <li><strong>Git & GitHub</strong> – For version control and collaborative development.</li>
                <li><strong>Vercel / Netlify</strong> – For deploying the project and making it accessible online.</li>
</ol>

          </div>
        </div>
      </div>
    </div>
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
