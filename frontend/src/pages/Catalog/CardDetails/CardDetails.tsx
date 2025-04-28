import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCardData } from "./hooks/UserCardData";
import ImageGallery from "./ui/ImageGallery/ImageGallery";
import Modal from "./ui/Modal/Modal";
import Comments from "./ui/Comments/Comments";
import styles from "./styles.module.scss";

const CardDetails = () => {
  const [cardData, setCardData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const data = await useCardData(id);
      setCardData(data);
    };

    loadData();
  }, [id]);

  // console.log(cardData);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentImage, setCurrentImage] = useState("");
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // if (isLoading) return <LoaderDetail />;
  // if (isError) return <div>Ошибка: {error.message}</div>;

  // const images = [cardData.image1, cardData.image2, cardData.image3];

  // const handleThumbnailClick = (image) => {
  //   setCurrentImage(image);
  //   setCurrentImageIndex(images.indexOf(image));
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handlePrevImage = () => {
  //   const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
  //   setCurrentImage(images[prevIndex]);
  //   setCurrentImageIndex(prevIndex);
  // };

  // const handleNextImage = () => {
  //   const nextIndex = (currentImageIndex + 1) % images.length;
  //   setCurrentImage(images[nextIndex]);
  //   setCurrentImageIndex(nextIndex);
  // };

  return (
    <>
      <div className={styles.back}>
        <Link to="/catalog" className={`${styles.back__link} ${styles.link}`}>
          ❮ Назад
        </Link>
      </div>
      {/* <Modal
        isOpen={isModalOpen}
        currentImage={currentImage}
        images={images}
        onClose={handleCloseModal}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
        onThumbnailClick={handleThumbnailClick}
      /> */}
      {/* <ImageGallery
        images={cardData.images}
      /> */}
      <div className={styles.block}>
        <div className={styles.block__text}>
          <div className={styles.block__text__title}>
            <h3>{cardData.title}</h3>
          </div>
          <div className={styles.block__text__text}>
            <p className={styles.block__text}>{cardData.text}</p>
          </div>
        </div>
      </div>
      <div className={styles.coments}>
        <h1>Комментарии</h1>
      </div>
      <Comments cardId={id} />
    </>
  );
};

export default CardDetails;
