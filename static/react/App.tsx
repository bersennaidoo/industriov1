import React, { useState, useEffect } from "react";
import axios from "axios"
import Header from "./components/blocks/Header/Header";
import ThumbnailContainer from "./components/features/CoffeeShop/ThumbnailContainer/ThumbnailContainer";

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get("/api/items")
    .then((result) => setItems(result.data))
    .catch(console.error)
  }, [])

  return (
    <div className="pt-5 mt-5">
      <Header />
      <ThumbnailContainer items={items} />
    </div>
  );
}

export default App;
