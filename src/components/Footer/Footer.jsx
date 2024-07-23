import React from "react";
import { useTranslation } from "react-i18next";
import DashMe from "../../assets/images/footer/DashMe.png";
import Facebook from "../../assets/images/footer/facebook.svg";
import X from "../../assets/images/footer/x.svg";
import TikTok from "../../assets/images/footer/tiktok.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <p className="text-[2rem] font-medium">
          {t("WANT TO PUT A SMILE ON SOMEONE'S FACE?")}
        </p>
        <div className="flex gap-5">
          <button
            className="w-[308px] h-[50px] bg-[#568203] text-white text-xl font-medium rounded-xl scale-95 transform transition duration-300 hover:scale-100"
            type="button"
          >
            {t("Sell")}
          </button>
          <button
            className="w-[308px] h-[50px] border  border-[#568203] text-[#568203] text-xl font-medium rounded-xl scale-95 transform transition duration-300 hover:scale-100"
            type="button"
          >
            {t("Donate")}
          </button>
        </div>
        <div className="flex gap-1 text-xl font-medium">
          <p className="text-[#568203]">{t("SIGN UP")}</p>
          <p> {t("TO RECEIVE WEEKEND DISCOUNT OFFERS")}</p>
        </div>
      </div>
      <div className="flex justify-between py-10 pl-4 pr-10">
        <div className="flex flex-col items-center">
          <img src={DashMe} alt="DashMe Africa" className="w-[223px]" />
          <div className="flex items-center gap-8 mt-5">
            <img src={Facebook} alt="Facebook" className="cursor-pointer scale-95 transform transition duration-300 hover:scale-105" />
            <img src={X} alt="X" className="cursor-pointer scale-95 transform transition duration-300 hover:scale-105" />
            <img src={TikTok} alt="TikTok" className="cursor-pointer scale-95 transform transition duration-300 hover:scale-105" />
          </div>
        </div>
        <div className="mt-8">
          <p className="text-2xl font-medium">{t("Our Mission")}</p>
          <p className="w-[250px] text-balance mt-2">
            {t("To become the leading online marketplace where we help you donate and/or sell your used items at giveaway prices, thereby reducing CO2 emission through our platform.")}
          </p>
        </div>
        <div className="mt-8">
          <p className="text-2xl font-medium">{t("Nigeria")}</p>
          <p className="w-[220px] text-balance mt-2">
            {t("No. 4B Wonodi Crescent by Stadium Road, Port Harcourt.")}
          </p>
          <p className="text-[#71033F] mt-5">+234 703 675 6184</p>
          <p className="text-[#71033F]">help@dashme.africa</p>
        </div>
        <div className="mt-8">
          <p className="text-2xl font-medium">{t("UK")}</p>
          <p className="w-[200px] text-balance mt-2">
            {t("Andrexa Global Logistics, 8 Bromborough Avenue, Wirral, Liverpool CH62 7AW")}
          </p>
          <p className="text-[#71033F] mt-2">+447 799 178 814</p>
          <p className="text-[#71033F]">help@dashme.africa</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
