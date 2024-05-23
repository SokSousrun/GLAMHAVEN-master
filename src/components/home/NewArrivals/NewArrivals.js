import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="RDY Y60 002"
            price="2399"
            color="Black"
            badge={true}
            des="RDY Y60 002 Windows 11 Home, Intel Core i9-13900KF CPU, ASUS Z790 WiFi MB, GeForce RTX 4070 12GB GPU, 32GB DDR5-6000MHz RGB RAM, 2TB M.2 NVMe SSD, iBUYPOWER 360mm RGB Liquid Cooling"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="RDY Lancool 003"
            price="2249"
            color="Black"
            badge={true}
            des="RDY Lancool 003
            Windows 11 Home, AMD Ryzen 7 7700X CPU, ASUS B650M WiFi MB, GeForce RTX 4070 Ti SUPER 16GB GPU, 32GB DDR5-5600MHz RGB RAM, 2TB M.2 NVMe SSD, iBUYPOWER 240mm RGB Liquid Cooling"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="ASUS ROG Strix G18"
            price="1899"
            color="Black"
            badge={true}
            des="MODEL CODE : ASUS ROG G814JVR-N6014W
            - CPU : Intel® Core™ i9 14900HX (24C/32T,5.8GHz Max)
            - RAM : 16GB DDR5-4800Mhz
            - Storage : 1TB PCIe® 4.0 NVMe™ M.2 SSD
            - Screen :  18 QHD (2560 x 1600) + 240hz IPS
            - VGA : NVIDIA® GeForce RTX™ 4060 8GB GDDR6
            - Keyboard : Backlit Chiclet Keyboard Per-Key RGB
            - OS : Windows 11 Home (64-bit)
            - Battery : 90WHrs, 4S1P, 4-cell Li-ion
            - Weight : 3.00 Kg | Color : Volt Green"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="ASUS ROG G814JU "
            price="1499"
            color="Black"
            badge={false}
            des="MODEL CODE : ASUS ROG G814JU-N6128W
            - CPU :  Intel Core i7-13650HX (14C/20T,4.9GHz Max)
            - RAM : 16GB DDR5-4800Mhz
            - Storage : 512GB PCIe® 4.0 NVMe™ M.2 SSD
            - Screen :  18 QHD (2560 x 1600) + 240hz IPS
            - VGA : NVIDIA® GeForce RTX™ 4050 6GB GDDR6
            - Keyboard : Backlit Chiclet Keyboard Per-Key RGB
            - OS : Windows 11 Home (64-bit)
            - Battery : 90WHrs, 4S1P, 4-cell Li-ion
            - Weight : 3.00 Kg | Color : Gray"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
