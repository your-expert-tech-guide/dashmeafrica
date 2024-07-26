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
    <div className="flex items-center justify-between pl-3 pr-10 gap-2 max-[700px]:relative max-[600px]:pl-0 max-[600px]:pr-0">
      <div className="flex items-center w-1/2 justify-between max-[1220px]:w-auto">
        <div>
          <img
            src={Logo}
            alt="DashMe Logo"
            className="max-[400px]:w-[75px] cursor-pointer scale-95 transform transition duration-300 hover:scale-105"
          />
        </div>
        <form className="flex items-center max-[870px]:absolute max-[870px]:left-1/2 max-[870px]:transform max-[870px]:-translate-x-1/2 max-[870px]:mt-28">
          <input
            type="search"
            className="border border-[#568203] w-[300px] h-[50px] rounded-s-2xl outline-none pl-5 pr-2 max-[1220px]:w-[220px] max-[870px]:w-[500px] max-[600px]:w-[350px] max-[425px]:w-[280px] max-[600px]:h-[40px]"
            placeholder={t("Search for items")}
          />
          <button
            type="submit"
            className="bg-[#568203] w-[72px] h-[50px] rounded-e-2xl flex items-center justify-center max-[1220px]:w-[52px] max-[600px]:h-[40px]"
          >
            <img src={Search} alt="Search" className="max-[600px]:w-[20px]" />
          </button>
        </form>
      </div>
      <div className="flex items-center gap-10 max-[1000px]:gap-5 max-[378px]:gap-[12px] max-[600px]:gap-4">
        <img
          src={Mail}
          alt="Message"
          className="max-[600px]:w-[18px] w-9 scale-95 transform transition duration-300 hover:scale-105 cursor-pointer"
        />
        <img
          src={NotificationIcon}
          alt="Notification"
          className="max-[600px]:w-[18px] w-8 scale-95 transform transition duration-300 hover:scale-105 cursor-pointer"
        />
        <img
          src={Save}
          alt="Saved Item"
          className="max-[600px]:w-[18px] w-8 scale-95 transform transition duration-300 hover:scale-105 cursor-pointer"
        />
        <img
          src={User}
          alt="Profile"
          className="max-[600px]:w-[18px] w-8 scale-95 transform transition duration-300 hover:scale-105 cursor-pointer"
        />
        <p className="text-xl max-[600px]:text-xs">{t("Upload")}</p>
        <Link to="/signup" className="text-xl max-[600px]:text-xs">
          {t("Sign Up")}
        </Link>
        <div className="flex items-center relative">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-select outline-none text-xl max-[600px]:text-xs"
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
