import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer_container d-flex justify-content-between ">
            <div>
              <img src={logo} alt="" srcset="" />{" "}
              <ul>
                <li>
                  <h5>Write Email with us</h5>
                </li>
                <li>
                  Enter email * <br></br>
                  <input type="text" placeholder="test@gmail.com" />
                </li>
                <li>
                  <button className="btn">SUBMIT</button>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h5>Useful Links</h5>
                <li>About us</li>
                <li>Contact us</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Carrers</li>
                <li>Sitemap</li>
                <li>Store Locator</li>
              </ul>
            </div>
            <div>
              <ul>
                <h5>Buying Guide</h5>

                <li>Gift Card</li>
                <li>Couper Code & Offers T&C</li>
                <li>Returns & Exchanges</li>
                <li>Shipping & Delivery</li>
                <li>Payment Options</li>
                <li>Give Us Feedback</li>
                <li>Order Customization</li>
              </ul>
            </div>
            <div>
              <ul>
                <h5>Shopping</h5>

                <li>New Arrivals</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
              </ul>
              <ul>
                <h5>connect with us</h5>

                <div className="d-flex justify-content-between  ">
                  <li>
                    <i class="fab fa-instagram fa-2x"></i>
                  </li>
                  <li>
                    <i class="fab fa-facebook fa-2x"></i>
                  </li>
                  <li>
                    <i class="fab fa-linkedin fa-2x"></i>
                  </li>
                </div>
              </ul>
            </div>
            <div>
              <ul>
                <h5>Policies</h5>

                <li>Terms & Conditions </li>
                <li>Security & Privacy</li>
                <li>Purchase Order Policy</li>
              </ul>
              <ul>
                <h5>
                  <i class="fas fa-phone-square-alt "></i> Talk to us
                </h5>

                <li>+91966340663</li>
                <li>+917762989531</li>
              </ul>
            </div>
          </div>

          <div className="footer_sub">
            <div className="d-flex">
              <h5>Popular Searches</h5>
              <hr />
            </div>

            <div>
              Sherwani | Track Pants | Blazers | Sweaters For Men | Men Wedding
              Dresses | Kurta Pajama | Raincoats | Shorts | Trousers | Waistcoat
              | Inner Wear | Nightwear | Jeans | Shirts | Jpgger Jeans | Men
              Suits | T Shirts | Sweatshirts | Jackets For Men | Tracksuits |
              Ripped Jeans | Ethnic wear | Hoodies | Raksha Bandhan Gifts
            </div>
            <hr />
          </div>
        </div>
        <div className="text-center">
          <p class="copyright">
            {" "}
            &#169; 2021 www.thiderinfo.com All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
