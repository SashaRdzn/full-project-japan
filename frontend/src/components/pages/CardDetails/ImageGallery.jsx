
import PropTypes from "prop-types";
const ImageGallery = ({ images, onThumbnailClick }) => {
    return (
      <>
        <div className="openImg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Фото ${index + 1}`}
              className={`bigImage block__img${index + 1}`}
              onClick={() => onThumbnailClick(image)}
            />
          ))}
        </div>
      </>
    );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
};


export default ImageGallery;