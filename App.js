import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/head";
import Body from "./src/body";
// const parent=React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child1"},[
//     React.createElement("h1",{id:"heading1"},"heading1"),
//     React.createElement("h2",{id:"heading2"},"heading2")
//     ]),
//     React.createElement("div",{id:"child2"},[
//     React.createElement("h3",{id:"heading3"},"heading3"),
//     React.createElement("h4",{id:"heading4"},"heading4")
//     ]),
// ]);
// const jsxheading=(<h1>
//     welcome to react 
//     </h1>);

// const HEADINGCOMPONENT = () => (
//     <div id="container">
//     {1000}
//     <h1 className="Headingcomp">namaste react</h1>
//     </div>
// );



   


const Applayout=()=>{
return (
    <div className="app">
        <Header />
        <Body />
    </div>
)
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
