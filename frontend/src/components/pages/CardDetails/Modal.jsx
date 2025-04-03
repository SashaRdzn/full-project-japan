import PropTypes from "prop-types";

const Modal = ({ isOpen, currentImage, images, onClose, onPrev, onNext, onThumbnailClick }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal" style={{ display: "flex", flexDirection: "column" }}>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <img
                    src={currentImage}
                    className="open__big"
                    alt="Полноэкранное фото"
                />
                <div className="prev" onClick={onPrev}>
                    &#10094;
                </div>
                <div className="next" onClick={onNext}>
                    &#10095;
                </div>
                {images.length > 0 ? (
                    <div className="thumbnails">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Миниатюра ${index + 1}`}
                                className={`thumbnail block__img__${index + 1}`}
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
export default Modal