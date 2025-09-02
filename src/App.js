import React from "react";
import StorageCard from "./StorageCard";
import "./App.css";

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
    </div>
  );
}

export default App;
