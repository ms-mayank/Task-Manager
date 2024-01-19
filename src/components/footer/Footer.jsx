import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="https://ms-mayank.github.io/" className="footer__logo">
        Mayank Shukla
      </a>
      <ul className="permalinks">
        <li>
          <a href="https://ms-mayank.github.io/#">Home</a>
        </li>
        <li>
          <a href="https://ms-mayank.github.io/#about">About</a>
        </li>
        <li>
          <a href="https://ms-mayank.github.io/#experience">Experience</a>
        </li>
        {/* <li>
          <a href="https://ms-mayank.github.io/#services">Services</a>
        </li> */}
        <li>
          <a href="https://ms-mayank.github.io/#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="https://ms-mayank.github.io/#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="https://ms-mayank.github.io/#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/msmayank/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/ms-mayank">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/channel/UCmefvzYXttYVHwyds4SITYw">
          <BsYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
