import { useState, useEffect } from 'react';
import './Contact.css';
const Contact = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalShow = () => {
    setModalVisible(true);
    console.log('dsada');
    
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleModalSend = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    let map;
    if (!window.ymaps) {
        console.error('Yandex Maps API не загружен');
        return;
    }
    window.ymaps.ready(() => {
        if (!document.getElementById('YMapsID')._yandexMap) {
            map = new window.ymaps.Map('YMapsID', {
                center: [35.782081, 139.898528],
            zoom: 13,
            });
            const placemark = new window.ymaps.Placemark([35.782081, 139.898528], {
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
    <div>
      <div className={`modal__windows ${modalVisible ? 'visible' : ''}`} id="modalWindows">
        <div className="modal__windows__form">
          <form>
            <h2>У вас есть вопрос?</h2>
            <label htmlFor="name">
              Ваше имя:
              <input autoComplete="off" placeholder="Иван" type="text" className="modal__input input_value" name="name" />
            </label>
            <label htmlFor="email">
              Ваша почта:*
              <input autoComplete="off" type="email" placeholder="test@mail.ru" className="modal__input input_value" name="email" />
            </label>
            <label htmlFor="telephone">
              Ваш номер телефона:*
              <input
                autoComplete="off"
                type="tel"
                className="modal__input input_value"
                pattern="\+7\s?[\(]{0,1}[0-9]{3}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                title="Формат: +7 (XXX) XXX-XX-XX"
                required
                maxLength="16"
                name="telephone"
                placeholder="+7 XXX XXX-XX-XX"
              />
            </label>
            <label htmlFor="ask">Как мы можем помочь Вам?*</label>
            <textarea
              id="ask"
              className="modal__input__ask"
              name="ask"
              placeholder="Введите ваш вопрос"
            ></textarea>
            <div className="modal__windows__button">
              <button className="modal__windows__button-1" type="button" onClick={handleModalClose}>
                Закрыть
              </button>
              <button className="modal__windows__button-2" type="button" onClick={handleModalSend}>
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="main__contacts">
        <div className="main__contacts__title">
          <h2 className="main__contacts__title-h2">Контакты:</h2>
          <button className="main__contacts__button" id="modal" onClick={handleModalShow}>
            Связаться с нами
          </button>
        </div>
        <div className="main__contacts__block">
          <div className="main__contacts__block-1">
            <img src="./images/addres.svg" width="100" alt="" />
            <div className="main__contacts__block-1-text">
              <p>Адрес: </p>
              <a className="link" href="https://yandex.ru/maps/-/CDxFJJn4">
                <h2>
                  Префектура Токио, Токийская префектурная дорога 50 <br />
                  Tokyo Prefecture, Tokyo Prefectural Route 50
                </h2>
              </a>
            </div>
          </div>
          <div className="main__contacts__block-1">
            <img src="./images/watch.svg" width="100" alt="" />
            <div className="main__contacts__block-1-text">
              <p>Часы работы:</p>
              <h2>С 9:00 до 19:00</h2>
              <h2>По выходным:</h2>
              <h2>с 10:00 до 17:00</h2>
            </div>
          </div>
          <div className="main__contacts__block-1">
            <img src="./images/telephone.svg" width="100" alt="" />
            <div className="main__contacts__block-1-text">
              <p>Телефон:</p>
              <h2>
                +81 8629-4845 <br />
                +7 909-875-32-19
              </h2>
            </div>
          </div>
          <div className="main__contacts__block-1">
            <img src="./images/telegram.svg" width="100" alt="" />
            <div className="main__contacts__block-1-text">
              <p>Telegram:</p>
              <a className="link" target="_blank" href="https://web.telegram.org/a/#1125255224" rel="noreferrer">
                <h2>@tokio_guide</h2>
              </a>
            </div>
          </div>
          <div className="main__contacts__block-1">
            <img src="./images/vk.svg" width="100" alt="" />
            <div className="main__contacts__block-1-text">
              <p>Вконтакте:</p>
              <a className="link" target="_blank" href="https://vk.com/page-777107_28406709" rel="noreferrer">
                <h2>tokio_guide.j</h2>
              </a>
            </div>
          </div>
        </div>
        <div id="YMapsID" className="block__ymaps"></div>
      </div>
    </div>
  );
};

export default Contact;