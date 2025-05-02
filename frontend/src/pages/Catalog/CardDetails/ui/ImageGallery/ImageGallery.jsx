import styles from './styles.module.scss'
import PropTypes from "prop-types";
import cn from "classnames";
const ImageGallery = ({ images, onThumbnailClick }) => {
    return (
      <>
        <div className={styles.openImg}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Фото ${index + 1}`}
              className={cn(styles.bigImage, styles[`block__img${index + 1}`])}
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