import { useState } from "react";
import "./index.css";

function ImageGallery() {
  const images = [
    "https://picsum.photos/200/301",
    "https://picsum.photos/200/306",
    "https://picsum.photos/200/303",
    "https://picsum.photos/200/302",
    "https://picsum.photos/200/305",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            onClick={() => openImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="lightbox">
          <div className="lightbox-content">
            <span className="close" onClick={closeImage}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
