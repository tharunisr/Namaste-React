import React from "react";
import ReactDOM from "react-dom/client";

//React.Createelement=>ReactElement-->JS object --> HTMLElement(Render)



// const heading=React.createElement(
//     "h1",
//     {id:"heading"},
//      "Namaste React"
// );
    



// console.log(heading);

//JSX -->transpiled before it reaches to js engine -->Parcel -- Bable

//JSX --> Babel transpiled it to React.CreateELement=>ReactElement-->JS object --> HTMLElement(Render)

// const jsxheading=<h1 className="head" tabIndex="1">Namaste React from JSX</h1>
// console.log(jsxheading);

const element=(
    <span>Hello World</span>
)

//React Component
// 1) CLass Based Component - OLD
// 2) Functional Based Component - NEW

//React Functional Component

// const Heading = () => {
//     return <h1>"Namaste React From Functional Component</h1>
// }

//COMPONENT COMPOSITION => Put 2 components in one 

// const Title=() => (
//     <h1 className="head" tabIndex="1">Namaste React from JSX</h1>
//     );

// const HeadingComponent= () => (
//      <div id="container">
//         <Title/>
//          <Title></Title>
//          {Title()}
//      <h1 class="heading">Namaste React From Functional Component</h1>
//      </div>
//     );


 const data=1000;
const HeadingComponent= () => (
    <div id="container">
        {/* {number}
        <h2>{number+100}</h2> 
        title
        */
        data
        }
    <h1 className="heading">Namaste React From Functional Component</h1>
    </div>
   );

   const Title= (
    <p className="head" tabIndex="1">
        {/* {element} */}
        Namaste React from JSX
    <HeadingComponent/>
        </p>
    );




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(Title);

