import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Let's Start");
  const [count, setCount] = useState(0);

  let handleNameChange = () => {
    let names = ["vikas", "Rajan", "Akku"];
    let int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  let handleCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <main>
      <p>{name}!</p>

      <button onClick={handleNameChange}>Change Name</button>

      <button onClick={handleCount}>Count</button>
    </main>
  );
};

export default Content;
