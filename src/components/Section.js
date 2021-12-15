import React from "react";
import partywearimage1 from "../images/men-party-wear.svg";
import partywaerimage2 from "../images/women-party-wear.svg";
import winterwear from "../images/women-winter-wear.svg";
import blazers from "../images/men-blazers.svg";
import model1 from "../images/seller_section_img.svg";
import wavesectionimg1 from "../images/wave_section_1.svg";
import wavesectionimg2 from "../images/wave_section_2.svg";
import wavesectionimg3 from "../images/wave_fashion_3.svg";

import styleofferimg from "../images/style_offerimg.svg";

import topbrand1 from "../images/top_brands_1.svg";
import topbrand2 from "../images/top_brands_2.svg";
import topbrand3 from "../images/top_brands_3.svg";
import topbrand4 from "../images/top_brands_4.svg";

import oscwimg1 from "../images/osc_wear_1.svg";
import oscwimg2 from "../images/osc_wear_2.svg";
import oscwimg3 from "../images/osc_wear_3.svg";
import oscwimg4 from "../images/osc_wear_4.svg";
import oscwimg5 from "../images/osc_wear_5.svg";
import oscwimg6 from "../images/osc_wear_6.svg";
import oscwimg7 from "../images/osc_wear_7.svg";
import oscwimg8 from "../images/osc_wear_8.svg";

import clothimg from "../images/women-cloth.svg";

import "./Section.css";

const Section = () => {
  return (
    <div>
      <div className="header_container">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header-title ">MAKE YOUR LOOKS MORE PERFECT</div>
              <button className="btn shop_now_btn">SHOP NOW</button>
            </div>
            <div className="col-6 header-image">
              <img src={clothimg} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div className="best_seller_section">
        <div className="container">
          <h1 className="text-center">Best Sellers</h1>

          <div className="best_cloth_section d-flex justify-content-between">
            <div className="cloth_section">
              <img src={blazers} alt="" />
              <button className="btn btn1">Men Blazers</button>
            </div>
            <div className="cloth_section">
              <img src={partywaerimage2} alt="" />
              <button className="btn btn2">Women Party Wear</button>
            </div>
            <div className="cloth_section">
              <img src={partywearimage1} alt="" />
              <button className="btn btn3">Men Party Wear</button>
            </div>
            <div className="cloth_section">
              <img src={winterwear} alt="" />
              <button className="btn  btn4">Women Winter Wear</button>
            </div>
          </div>
        </div>
      </div>
      {/* Best Sellers section end */}
      <div className="seller_container">
        <div className="container">
          <div className="row ">
            <div className="col-6">
              <h1 className="">
                THE MOST <br /> ELEGENT STANCE OF FASHION FOR MEN
              </h1>
              <div className="model_image1">
                <img src={model1} alt="" />
              </div>
            </div>

            <div className="col-6">
              <div className="model_image2">
                <img src={model1} alt="" />
              </div>
              <h1 className="">
                THE MOST <br /> ELEGENT STANCE OF FASHION FOR MEN
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Wave fashion Section */}
      <div className="wave_fashion_container">
        <div className="container">
          <h1 className="text-center ">The New Wave Fashion</h1>

          <div className="d-flex justify-content-between">
            <div className="wave_fashion_image">
              <img src={wavesectionimg1} alt="" />
            </div>

            <div className="wave_fashion_image">
              <img src={wavesectionimg2} alt="" />
            </div>
            <div className="wave_fashion_image">
              <img src={wavesectionimg3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="wave_fashion_bottom"></div>

      {/* Top Brands section */}
      <div className="top_brands">
        <div className="container">
          <h1 className="text-center">60% Off On Top Brands</h1>
          <div className="top_brand_section d-flex ">
            <div className="cloth_section">
              <img src={topbrand1} alt="" />
              <button className="btn btn1">Levi's</button>
            </div>
            <div className="cloth_section">
              <img src={topbrand2} alt="" />
              <button className="btn btn2">Roadstar</button>
            </div>
            <div className="cloth_section">
              <img src={topbrand3} alt="" />
              <button className="btn btn3">Jack & Jones</button>
            </div>
            <div className="cloth_section">
              <img src={topbrand4} alt="" />
              <button className="btn btn4"> BiBA</button>
            </div>
          </div>
        </div>
        <div className="top_brand_offer">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={styleofferimg} alt="" />
              </div>
              <div className="col-6">
                <h1 className="text-center">
                  Top Styels For You <br />
                  <span>50-80% Off</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Occasional wears */}
      <div className="occasional_wears">
        <h1 className="text-center">Occasional wears</h1>
        <div className="container d-flex flex-wrap">
          <div className="ocs_wears_image">
            <img src={oscwimg1} alt="" srcset="" />
          </div>
          <div className="ocs_wears_image">
            <img src={oscwimg2} alt="" srcset="" />
          </div>
          <div className="ocs_wears_image">
            <img src={oscwimg3} alt="" srcset="" />
          </div>
          <div className="ocs_wears_image">
            <img src={oscwimg4} alt="" srcset="" />
          </div>
          <div className="ocs_wears_image">
            <img src={oscwimg5} alt="" srcset="" />
          </div>
          <div className="ocs_wears_image">
            <img src={oscwimg6} alt="" srcset="" />
          </div>
          <div className="ocs_wears_image">
            <img src={oscwimg7} alt="" srcset="" />
          </div>
          <div className="ocs_wears_image">
            <img src={oscwimg8} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
