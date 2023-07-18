import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Mivi Earpod",
    },
    {
      id: 2,
      checked: false,
      item: "Boat Sound Music",
    },
    {
      id: 3,
      checked: false,
      item: "Gigabyte PC",
    },
    {
      id: 4,
      checked: false,
      item: "Antec Esport",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    console.log(id);

    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label onDoubleClick={() => handleCheck(item.id)}>
                {" "}
                {item.item}{" "}
              </label>

              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabindex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}> Your List Is Empty</p>
      )}
    </main>
  );
};

export default Content;
