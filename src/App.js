import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./service.js";
import { useState } from "react";
import ImagesList  from "./Components/ImagesList.js";

function App() {
  const [images, setImage] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImage(result);
  };
  return (
    <div className="App">
      <header className="App-header">
        <SearchHeader search={handleSubmit}></SearchHeader>
        <ImagesList imagesPlaceHolder={images} ></ImagesList>
      </header>
    </div>
  );
}

export default App;
