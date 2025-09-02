import React from "react";
import StorageCard from "./StorageCard";
import "./App.css";
import LiquidGlass from "liquid-glass-react";

function App() {
  return (
    <div className="App">
      <StorageCard
        cardIndex={0}
        storageAmount="847GB"
        storageTotal="1TB"
        percentage={84.7}
        imageSrc="/Image.png"
      />
      <StorageCard
        cardIndex={1}
        storageAmount="847GB"
        storageTotal="1TB"
        percentage={84.7}
        imageSrc="/Image.png"
      />

      {/* <div className="card-4">X</div> */}

      {/* <div class="wrapper">
        <div class="content">Your content here</div>
      </div> */}
    </div>
  );
}

export default App;
