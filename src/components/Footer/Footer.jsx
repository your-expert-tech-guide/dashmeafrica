import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DashMe from "../../assets/images/footer/DashMe.png";
import Facebook from "../../assets/images/footer/facebook.svg";
import X from "../../assets/images/footer/x.svg";
import TikTok from "../../assets/images/footer/tiktok.svg";

const FooterButton = ({ textKey, primary }) => {
  const { t } = useTranslation();
  const baseClass = "w-[120px] sm:w-[208px] lg:w-[308px] h-[40px] sm:h-[50px] font-medium rounded-xl scale-95 transform transition duration-300 hover:scale-100";
  const primaryClass = primary ? "bg-[#568203] text-white" : "border border-[#568203] text-[#568203]";
  return (
    <button className={`${baseClass} ${primaryClass}`} type="button">
      {t(textKey)}
    </button>
  );
};

const FooterAddress = ({ countryKey, address, phone, email }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-8">
      <p className="text-[#568203] text-lg sm:text-2xl font-medium">
        {t(countryKey)}
      </p>
      <p className="w-[150px] sm:w-[220px] mt-2 text-sm sm:text-base">
        {t(address)}
      </p>
      <p className="text-[#71033F] mt-1 text-sm sm:text-base">{phone}</p>
      <p className="text-[#71033F] text-sm sm:text-base">{email}</p>
    </div>
  );
};

const SocialMediaIcon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-[23px] sm:w-[35px] cursor-pointer scale-95 transform transition duration-300 hover:scale-105"
  />
);

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      {/* Call to Action Section */}
      <div className="flex flex-col items-center gap-5 sm:gap-9 pb-14">
        <p className="sm:text-[1.5rem] lg:text-[2rem] font-medium">
          {t("WANT TO PUT A SMILE ON SOMEONE'S FACE?")}
        </p>
        <div className="flex gap-5">
          <FooterButton textKey="Sell" primary />
          <FooterButton textKey="Donate" />
        </div>
        <div className="flex gap-1 text-xs sm:text-lg lg:text-xl font-medium">
          <p className="text-[#568203]">
            <Link to="/signup">{t("SIGN UP")}</Link>
          </p>
          <p>{t("TO RECEIVE WEEKEND DISCOUNT OFFERS")}</p>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="flex justify-around pt-5 pb-5 sm:pt-1 sm:py-10 gap-2 sm:border-t border-[#568203]">
        {/* Left Side */}
        <div className="flex flex-col-reverse lg:flex-row lg:justify-around lg:w-[50%] border border-[#568203] p-3 rounded-xl sm:border-none">
          <div className="flex flex-col items-center mt-5 sm:mt-0">
            <img src={DashMe} alt="DashMe Africa" className="w-[150px] sm:w-[223px]" />
            <div className="flex items-center gap-8 mt-5">
              <SocialMediaIcon src={Facebook} alt="Facebook" />
              <SocialMediaIcon src={X} alt="X" />
              <SocialMediaIcon src={TikTok} alt="TikTok" />
            </div>
          </div>
          <div className="sm:mt-8">
            <p className="text-[#568203] text-lg sm:text-2xl font-medium">
              {t("Our Mission")}
            </p>
            <p className="w-[150px] sm:w-[250px] text-balance mt-2 text-sm sm:text-base">
              {t(
                "To become the leading online marketplace where we help you donate and/or sell your used items at giveaway prices, thereby reducing CO2 emission through our platform."
              )}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col lg:flex-row lg:justify-around lg:w-[50%] justify-center border border-[#568203] p-2 rounded-xl sm:border-none">
          <FooterAddress
            countryKey="Nigeria"
            address="No. 4B Wonodi Crescent by Stadium Road, Port Harcourt."
            phone="+234 703 675 6184"
            email="info@dashme.africa"
          />
          <FooterAddress
            countryKey="UK"
            address="Andrexa Global Logistics, 8 Bromborough Avenue, Wirral, Liverpool CH62 7AW"
            phone="+447 799 178 814"
            email="info@dashme.africa"
          />
        </div>
      </div>

      {/* Footer Disclaimer */}
      <p className="text-center mb-2 text-sm">
        Andrexa Global Product.
        <br className="block sm:hidden" /> All Rights Reserved. © Copyright 2024
      </p>
    </div>
  );
};

export default Footer;

