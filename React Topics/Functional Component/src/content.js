import React from "react";

const content = () => {

    let handleNameChane = () => {
      let name = ["vikas", "Rajan", "Akku"];
      let int = Math.floor(Math.random() * 3);

      return name[int];
    };
    
  return (
    <main>
      <p>{handleNameChane()}</p>
    </main>
  );
};

export default content;
