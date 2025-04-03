import { useState, useEffect, useRef } from 'react';

const Slider = () => {
    const url_image = [
        '/images/tokio_noch.jpg',
        '/images/jij.png',
        '/images/Rainbow.jpg',
        '/images/Building-Japan-Wallpaper.png',
        '/images/fon.png',
        '/images/fonstola.jpg',
        '/images/fonstola.ru_167395.jpg',
        '/images/tokyo-goroda.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const mainRef = useRef(null);

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.style.background = `url(${url_image[currentImageIndex]}) no-repeat center center/cover`;
        }
    }, [currentImageIndex]);

    const handleLeftClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + url_image.length) % url_image.length);
    };

    const handleRightClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % url_image.length);
    };

    return (
        <main className="main" ref={mainRef}>
            <div className="main__title">
                <h2 className="main__title-h2">
                    Путеводитель по городу Токио
                </h2>
            </div>
            <div className="container">
                <div className="main__arrow">
                    <h2 onClick={handleLeftClick}>&#11164;</h2>
                    <h2 onClick={handleRightClick}>&#11166;</h2>
                </div>
            </div>
        </main>
    );
};

export default Slider;