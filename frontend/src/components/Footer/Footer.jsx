import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
          <div className="footer__block-1">
            <h4>Навигация</h4>
            <Link to='/' className="link" >
              Главная</Link>
            <Link to='/contacts' className="link" >Контакты</Link>
            <Link to='/catalog' className="link" >
              Достопримечательности</Link>
          </div>
          <div className="footer__block-2">
            <h4>Техническая поддержка</h4>
            <Link to='/contacts' className="link" >Если у вас возникли <br/> вопросы или проблемы, <br/>мы готовы
              помочь!</Link>
            <Link to='/contacts' className="link">Тех-поддержка</Link>
          </div>
          <div className="footer__block-3">
            <h4>Политика</h4>
            <Link to='/contacts' className="link" >Условия использования</Link>
            <Link to='/contacts' className="link" >Конфиденциальность</Link>
            <Link to='/contacts' className="link" >Настройки Cookie</Link>
          </div>
          <div className="footer__block-4" id="footer__block-4">
            <h4>Подписка на рассылку</h4>
            <form className="footer__block-btn">
              <input id="input" type="email" placeholder="Введите почту" maxLength="30"/>
              <button type="button" id="button_sudmit">Подписаться</button>
            </form>
          </div>
        </div>
    );
};

export default Footer;