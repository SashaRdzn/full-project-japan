import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Modal = ({
  isOpen,
  currentImage,
  images,
  onClose,
  onPrev,
  onNext,
  onThumbnailClick,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div
        className={styles.modal}
        style={{ display: "flex", flexDirection: "column" }}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <img
          src={currentImage}
          className={styles.open__big}
          alt="Полноэкранное фото"
        />
        <div className={styles.prev} onClick={onPrev}>
          &#10094;
        </div>
        <div className={styles.next} onClick={onNext}>
          &#10095;
        </div>
        {images.length > 0 ? (
          <div className={styles.thumbnails}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Миниатюра ${index + 1}`}
                className={styles[`block__img__${index + 1}`]}
                onClick={() => onThumbnailClick(image)}
              />
            ))}
          </div>
        ) : (
          <p>Нет изображений для отображения</p>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  currentImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
};

export default Modal;
