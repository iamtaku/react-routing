import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const { id } = match.params;

    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${id}`
    );
    const data = await fetchItem.json();
    // console.log("data: ", data);
    const info = data.data.item;
    setItem(info);
  };

  console.log(item.images);
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt="icon" />
    </div>
  );
}

export default ItemDetail;
