import ImageItem from "./ImageItem";
import "./ImageLis.css";

function ImagesList({ imagesPlaceHolder }) {
  return (
    <div className="imageList">
      {imagesPlaceHolder.map((img, index) => {
        return <ImageItem key={index} image={img}></ImageItem>;
      })}
    </div>
  );
}

export default ImagesList;
