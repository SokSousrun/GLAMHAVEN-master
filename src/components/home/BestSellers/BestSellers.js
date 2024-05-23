import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="HS80 RGB WIRELESS Premium Gaming"
          price="149.99"
          color="Blank and White"
          badge={true}
          des="HS80 RGB WIRELESS Premium Gaming Headset with Spatial Audio — Carbon
          The CORSAIR HS80 RGB WIRELESS Gaming Headset connects with hyper-fast SLIPSTREAM WIRELESS, delivering incredibly detailed sound through custom-tuned 50mm neodymium audio drivers with immersive Dolby Atmos® Audio CUE Software Supported in iCUE Surround Sound Yes Detachable Microphone No Rechargble Battery Yes Headset Frequency Response 20Hz - 40 kHz Headset Battery Life Up to 20 hours Headphone Sensitivity 116dB (+/-3dB) Headset Wireless Range 60ft Impedance 32 Ohms @ 1 kHz...​"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="CORSAIR VOID RGB Elite wireless Headset"
          price="99.99"
          color="Black"
          badge={false}
          des="CORSAIR VOID RGB Elite wireless Headset
          Immerse yourself in the action with the CORSAIR VOID RGB ELITE Wireless, boasting custom-tuned 50mm neodymium audio drivers, comfortable microfiber mesh fabric with memory foam earpads, and a 2.4GHz wireless connection. Audio Product Headset Audio CUE Software Yes Surround Sound Yes Detachable Microphone No Rechargble Battery Yes Headphone Frequency Response 20Hz - 30 kHz Headphone Battery Life Up to 16 hours Headphone Sensitivity 116dB (+/-3dB) Headphone Wireless Range Up to..."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="CORSAIR XENEON FLEX 45WQHD240"
          price="1999.00"
          color="Mixed"
          badge={true}
          des="CORSAIR XENEON 32UHD144-A 32-Inch IPS UHD 144Hz
          The CORSAIR XENEON 32UHD144-A brings your games and media to life on a vibrant, ultra-slim 32-inch IPS UHD 4K (3840x2160) display with a blazing fast refresh rate up to 144Hz and 1ms response time. Ultra-slim 32-inch UHD 3840x2160 display​ IPS LED panel with wide 178° viewing angle​ Fast 144Hz / 1ms​ Quantum Dot technology with 100% AdobeRGB/sRGB​ DisplayHDR™ 400 offers enhanced brightness and color​ Full iCUE control of OSD plus Streamdeck and Nexus integration​"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="CORSAIR XENEON 32UHD144-A 32-Inch"
          price="799.00"
          color="Black"
          badge={false}
          des="CORSAIR XENEON 32UHD144-A 32-Inch IPS UHD 144Hz
          The CORSAIR XENEON 32UHD144-A brings your games and media to life on a vibrant, ultra-slim 32-inch IPS UHD 4K (3840x2160) display with a blazing fast refresh rate up to 144Hz and 1ms response time. Ultra-slim 32-inch UHD 3840x2160 display​ IPS LED panel with wide 178° viewing angle​ Fast 144Hz / 1ms​ Quantum Dot technology with 100% AdobeRGB/sRGB​ DisplayHDR™ 400 offers enhanced brightness and color​ Full iCUE control of OSD plus Streamdeck and Nexus integration​"
        />
      </div>
    </div>
  );
};

export default BestSellers;
