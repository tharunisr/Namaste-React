/* <div class="parent">

    <div class="child">

    <h1>heading</h1>
    <h2>heading</h2>
    
    </div>

    <div class="child2">

    <h1>heading</h1>
    <h2>heading</h2>
    
    </div>

    </div>
*/


// const heading=React.createElement("h1",
//     {id:"heading"},
//     "Hello World from React");     //javascript objec



// const parent=React.createElement("div",{id:"parent"}, 
//              React.createElement("div",{id:"child"},
//              [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]))


const parent=React.createElement("div",{id:"parent"}, 
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")
]),

    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")])
]);

    console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  //it convert the object into h1 element and render