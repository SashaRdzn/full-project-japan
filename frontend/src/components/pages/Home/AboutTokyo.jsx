import { useEffect } from 'react';

const AboutTokyo = () => {
    useEffect(() => {
        let map;
        if (!window.ymaps) {
            console.error('Yandex Maps API не загружен');
            return;
        }
        window.ymaps.ready(() => {
            if (!document.getElementById('YMapsID')._yandexMap) {
                map = new window.ymaps.Map('YMapsID', {
                    center: [35.688366, 139.753915],
                    zoom: 7,
                });
                const placemark = new window.ymaps.Placemark([35.688366, 139.753915], {
                    content: 'Токио',
                });
                map.geoObjects.add(placemark);
                document.getElementById('YMapsID')._yandexMap = map;
            }
        });
        return () => {
            if (map) {
                map.destroy();
                document.getElementById('YMapsID')._yandexMap = null;
            }
        };
    }, []);
    return (
        <div className="container2 manifestation">
            <div className="block__title">
                <h3 className="block__title__h3">Токио</h3>
            </div>
            <div className="block__card">
                <div id="YMapsID" className="block__card-ymaps"></div>
                <p className="block__card__p">
                    Токио — столица Японии, государства в Восточной Азии,
                    расположенного на четырех крупных островах: Хоккайдо,
                    Хонсю, Сикоку и Кюсю — и многочисленных мелких островах (всего около 4 тыс.).
                    Город принадлежит к самым крупным современным «сверхгородам»,
                    численность населения которых перешагнула за десять миллионов.
                </p>
            </div>
        </div>
    );
};

export default AboutTokyo;