import ImageItem from "./ImageItem";

function ImagesList({ imagesPlaceHolder }) {
  return (
    <div>
      {imagesPlaceHolder.map((img, index) => {
        return <ImageItem key={index} image={img}></ImageItem>;
      })}
    </div>
  );
}

export default ImagesList;
