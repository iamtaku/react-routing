import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const dataJson = await data.json();
    // console.log(dataJson);
    const itemsMapped = dataJson.data.map((item) => item);
    setItems(itemsMapped);
  };
  // console.log(items);
  items.forEach((item) => console.log(item.itemId));
  return (
    <div>
      {items.map((item) => (
        <h3 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h3>
      ))}
    </div>
  );
}

export default Shop;
