import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/header/search_icon.png";
import Mail from "../../assets/images/header/mail.png";
import NotificationIcon from "../../assets/images/header/notification.png";
import Save from "../../assets/images/header/save.png";
import User from "../../assets/images/header/user.png";
import Dropdown from "../../assets/images/header/dropdown.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex items-center justify-between pl-3 pr-10">
      <div className="flex items-center gap-28">
        <div>
          <img
            src={Logo}
            alt="DashMe Logo"
            className="cursor-pointer scale-95 transform transition duration-300 hover:scale-105"
          />
        </div>
        <form className="flex items-center">
          <input
            type="search"
            className="border border-[#568203] w-[300px] h-[50px] rounded-s-2xl outline-none pl-5 pr-2"
            placeholder={t("Search for items")}
          />
          <button
            type="submit"
            className="bg-[#568203] w-[72px] h-[50px] rounded-e-2xl flex items-center justify-center"
          >
            <img src={Search} alt="Search" />
          </button>
        </form>
      </div>
      <div className="flex items-center gap-10">
        <img
          src={Mail}
          alt="Message"
          className="w-9 scale-95 transform transition duration-300 hover:scale-105 cursor-pointer"
        />
        <img
          src={NotificationIcon}
          alt="Notification"
          className="w-8 scale-95 transform transition duration-300 hover:scale-105 cursor-pointer"
        />
        <img
          src={Save}
          alt="Saved Item"
          className="w-8 scale-95 transform transition duration-300 hover:scale-105 cursor-pointer"
        />
        <img
          src={User}
          alt="Profile"
          className="w-8 scale-95 transform transition duration-300 hover:scale-105 cursor-pointer"
        />
        <p className="text-xl">{t("Upload")}</p>
        <Link to="/signup" className="text-xl">
          {t("Sign Up")}
        </Link>
        <div className="flex items-center relative">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-select outline-none text-xl"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
          <img
            src={Dropdown}
            alt="Arrow"
            className="dropdown-icon w-[15px] mt-[1px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
