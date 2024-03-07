import "./ImageItem.css";
function ImageItem(img) {
  const imageUrl = img.image.urls.small;
  return (
    <div className="imageDiv">
      <img className="Img" src={imageUrl} alt=""></img>
    </div>
  );
}
export default ImageItem;
