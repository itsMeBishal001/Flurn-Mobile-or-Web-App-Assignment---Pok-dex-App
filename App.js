import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

/*
AppLayout 
  serch component 
  api call after hitting serch
*/
const App=()=>{
return <>
<Search/>
</>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);