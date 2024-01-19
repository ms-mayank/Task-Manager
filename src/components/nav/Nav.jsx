import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="https://ms-mayank.github.io/" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="https://ms-mayank.github.io/#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="https://ms-mayank.github.io/#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>
        <BiBookAdd />
      </a>
      <a href="https://ms-mayank.github.io/#portfolio" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}>
        <RiServiceFill />
      </a>
      <a href="https://ms-mayank.github.io/#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
