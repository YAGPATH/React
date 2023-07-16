import React from "react";

const content = () => {
  let handleNameChane = () => {
    let name = ["vikas", "Rajan", "Akku"];
    let int = Math.floor(Math.random() * 3);

    return name[int];
  };

  let handleclick = () => {
    alert("We clicked it");
    console.log("We clicked it");
  };
  let handleclick2 = (name) => {
    alert("Name is: " + name);
    console.log(`${name} was clicked`);
  };

  let handleclick3 = (e) => {
    alert(e);
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>{handleNameChane()}!</p>
      <button onClick={handleclick}>Click It</button>
      <button
        onClick={() => {
          handleclick2("Vikas");
        }}
      >
        Click It
      </button>
      <button
        onClick={(e) => {
          handleclick3(e);
        }}
      >
        Click It
      </button>
    </main>
  );
};

export default content;
