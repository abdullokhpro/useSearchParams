import React from "react";
import "./footer.scss";

import footerService1 from "../../../assets/footer/Frame.svg";
import footerService2 from "../../../assets/footer/Group 18.svg";
import footerService3 from "../../../assets/footer/Vector.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__left">
          <div className="footer__left__service">
            <div className="footer__service__item">
              <img src={footerService1} alt="" />
              <p>Готовим вручную и с любовью</p>
            </div>
            <div className="footer__service__item">
              <img src={footerService2} alt="" />
              <p>Доставимв день заказа</p>
            </div>
            <div className="footer__service__item">
              <img src={footerService3} alt="" />
              <p>100% миндальная мукаи натуральные ингредиенты</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
