// {/* <div id="parent">
//     <div id="child">
//         <h1> </h1>
//         <h2></h2>
//     </div>
//      <div id="child">
//         <h1> </h1>
//         <h2></h2>
//     </div>
// </div> */}


//  Header
//     -Logo
//     -Nav items
// body
//      -Search
//      -RestrauntCard
// Contact
//     -Copyrights
//     -Links
//     -Address
//     -Contact
    




// const head=React.createElement("h1",{id:"heading", xyz:"abc"},"Hello from React");

// console.log(head);             //Object

// const head1=React.createElement("div",{id:"parent"},
//         [React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"Hello"),
//          React.createElement("h2",{},"World from namaste React")
//         ]),
//             React.createElement("div",{id:"child2"},
//             [React.createElement("h1",{},"Hello2"),
//              React.createElement("h2",{},"World2")
//             ])
//        ]); 

//React Element

// const jsxheading=<h1 id="heading">Namaste React</h1>

// const head= <h4>Heading Tag</h4>



//React Component 
// const JsxComponent= ()=> (
//     <div id="container">
//         <h1>React Component</h1> 
//     </div>
// )

// const Title=() => {
//     return <h1>Namaste React from JSX {head}
//     {JsxComponent} 
//     {<JsxComponent/>} 
//     {<JsxComponent></JsxComponent>} 
//       </h1>

// }

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Title/>);

//Inline CSS in JSX as JS object

<!-- const RestrauntCard=()=>{
    return <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <h3>The food Box</h3>
    </div>
} -->


2 type of Exports/Imports

Default 
---------------
export default component/variable;
import component/variable from "path";

Named - When you export multiple then use 
--------------
export const component/variable;
import {component/variable} from "path";

React Hooks
-------------

Hook is a normal javascript function that return super powerful state variable.

1 --> useState() - state varaible in react
2 --> useEffect()

Reconciliation(React Fiber) -- virtual representing a UI kept in memory sync with real DOM libraries such as ReactDOM.

In React Fiber is trying to split the tasks into multiple to do fast. Implementing abort,Stop,Complete.

Diff algorithm - Finding the difference between previous and updated Virtual DOMS.

whenever any changes in state variable diff will find out the difference between virtual DOM and it re-render the components.
(Core react Algorithm) 
 
whenever changes in state variable react triggers the reconcilation cycle(re-render the component)


--Install @reduxjs/toolkit and react-redux
--Build our store
--connect to the store
--Slice(cartSlice)
--Dispatch(action)
--Selector


Types of Testing(Developer)

--Unit Testing
--Integrated Testing
--End to End Testing (E2E)


React Testing Library
   -- Install React Testing Library
   --Install Jest
   --Install Babel dependencies(In Jest Website)
   --Configure Babel dependencies(create new file)
   --disable default configuration 
      1.Go to parcel -> Javascript -> Babel -> parcel.rc(create file)->Configure
   -- npm run jest (no test found)if no errors
   --Jest Configuration (npx jest --init)
      --1.No, 2.jsdom(browser-like),3.Yes, 4.Babel, 5.Yes 
   --Install jest-environment-jsdom(jsdom Library)


To save a file in test, createb a folder __tests__
   Header.test.js
   Header.test.ts
   Header.spec.js
   Header.sepc.ts

npm install -D @babel/preset-react to make jsx work in test cases
  --@babel/preset-react include this in the babel config file

npm install -D @testing-library/jest-dom