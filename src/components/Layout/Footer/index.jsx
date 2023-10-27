import React from "react";

// Icons
import { BsStackOverflow } from "react-icons/bs";

// Scoped style
import classes from "./style.module.scss";
import "@/assets/style/itisit-container.css";
// Constants
import { SOCIAL_MEDIA, LINKS } from "@/constants/footer";
// Image
import LogoSVG from "@/assets/image/LogoSVG";

export default function Footer() {
  return (
    <footer className={`itisit-container ${classes.footer}`}>
      <div className="logo-wrap">
        <LogoSVG />
      </div>

      <div className="links">
        {LINKS.map((item) => (
          <ul key={item.title} className="list">
            <li className="title">{item.title}</li>
            {item.links.map((link) => (
              <li key={link} className="item">
                {link}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <ul className="social-media">
        {SOCIAL_MEDIA.map((item) => (
          <li className="item">{item}</li>
        ))}
      </ul>
    </footer>
  );
}
