import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
     
      <Header/>
      <TinderCards/>
      <SwipeButtons />
      {/*buttons
       */}
    </div>
  );
}

export default App;
