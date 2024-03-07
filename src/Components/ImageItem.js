function ImageItem(img) {
  const imageUrl =img.image.urls.small;
  return (
    <div>
      <img src={imageUrl} alt="" />
    </div>
  );
}

export default ImageItem;
