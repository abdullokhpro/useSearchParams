import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassniki } from "react-icons/fa";
import "./header.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import imgLogo from "../../../assets/header/лого.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__top">
            <div className="header__top__right">
              <ul className="header__top__list">
                <li className="header__top__item">
                  <a className="header__top__link" href="#">
                    Гарантия свежести
                  </a>
                </li>
                <li className="header__top__item">
                  <a className="header__top__link" href="#">
                    Доставка и оплата
                  </a>
                </li>
                <li className="header__top__item">
                  <a className="header__top__link" href="#">
                    Оптовые поставки
                  </a>
                </li>
                <li className="header__top__item">
                  <a className="header__top__link" href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__top__left">
              <div className="header__select">
                <CiLocationOn />

                <select name="" id="">
                  <option value="">Russia</option>
                  <option value="">Usa</option>
                  <option value="">Netherlands</option>
                </select>
              </div>
              <div className="header__phone">
                <SlScreenSmartphone />

                <p>8 812 309-82-88</p>
              </div>
              <div className="header__cart">
                <IoBagHandleOutline />
                <p>В корзине (4 товара)</p>
              </div>
              <div className="header__socials">
                <FaTelegramPlane />
                <SlSocialVkontakte />
                <FaOdnoklassniki />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header__bottom">
        <div className="container header__container">
          <ul className="header__bottom__list">
            <li className="header__bottom__item">
              <NavLink className="header__bottom__link" to={"/"}>
                HOME
              </NavLink>
              <MdOutlineKeyboardArrowDown />
            </li>
            <li className="header__bottom__item">
              <a href="" className="header__bottom__link">
                подарочные наборы
              </a>
              <MdOutlineKeyboardArrowDown />
            </li>
            <li className="header__bottom__item">
              <a href="" className="header__bottom__link">
                Собрать набор
              </a>
              <MdOutlineKeyboardArrowDown />
            </li>
            <li className="header__bottom__item">
              <a href="" className="header__bottom__link">
                <img src={imgLogo} alt="" />
              </a>
            </li>
            <li className="header__bottom__item">
              <a href="" className="header__bottom__link">
                Создать дизайн
              </a>
              <MdOutlineKeyboardArrowDown />
            </li>
            <li className="header__bottom__item">
              <a href="" className="header__bottom__link">
                КОМПАНИЯМ
              </a>
              <MdOutlineKeyboardArrowDown />
            </li>
            <li className="header__bottom__item">
              <a href="" className="header__bottom__link">
                ВЕСЬ КАТАЛОГ
              </a>
              <MdOutlineKeyboardArrowDown />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
