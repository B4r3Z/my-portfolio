import "./FooterStyle.css";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <h3>+964 771 463 6226</h3>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <h3>barezdilshad@gmail.com</h3>
          </div>
        </div>
        <div className="right">
          <h3>About Me</h3>
          <p>
            Drinking dope, turned me to a superhero yeah yeah hit that pill,
            turn me to a superhero yeah yeah, boominati turned me to a super
            hero yeah yeah
          </p>
          <div className="socials">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
