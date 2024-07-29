import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Importing images
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "../../assets/images/header/search_icon.png";
import MailIcon from "../../assets/images/header/mail.png";
import NotificationIcon from "../../assets/images/header/notification.png";
import SaveIcon from "../../assets/images/header/save.png";
import UserIcon from "../../assets/images/header/user.png";
import DropdownIcon from "../../assets/images/header/dropdown.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center justify-between pl-3 pr-10 gap-2 max-[700px]:relative max-[600px]:pl-0 max-[600px]:pr-0">
      <div className="flex items-center w-1/2 justify-between max-[1220px]:w-auto">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="DashMe Logo"
            className="max-[400px]:w-[75px] cursor-pointer scale-95 transform transition duration-300 hover:scale-105"
          />
        </div>

        {/* Search Form */}
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
            <img src={SearchIcon} alt="Search" className="max-[600px]:w-[20px]" />
          </button>
        </form>
      </div>

      <div className="flex items-center gap-10 max-[1000px]:gap-5 max-[378px]:gap-[12px] max-[600px]:gap-4">
        {/* Header Icons */}
        <HeaderIcon src={MailIcon} alt="Message" />
        <HeaderIcon src={NotificationIcon} alt="Notification" />
        <HeaderIcon src={SaveIcon} alt="Saved Item" />
        <HeaderIcon src={UserIcon} alt="Profile" />

        {/* Upload Text */}
        <p className="text-xl max-[600px]:text-xs">{t("Upload")}</p>

        {/* Sign Up Link */}
        <Link to="/signup" className="text-xl max-[600px]:text-xs">
          {t("Sign Up")}
        </Link>

        {/* Language Selector */}
        <div className="flex items-center relative">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-select outline-none text-xl max-[600px]:text-xs"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
          <img src={DropdownIcon} alt="Arrow" className="dropdown-icon w-[15px] mt-[1px]" />
        </div>
      </div>
    </div>
  );
};

// Reusable HeaderIcon component
const HeaderIcon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="max-[600px]:w-[18px] w-8 scale-95 transform transition duration-300 hover:scale-105 cursor-pointer"
  />
);

export default Header;
