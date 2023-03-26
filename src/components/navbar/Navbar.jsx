import "./NavbarStyle.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [tap, setTap] = useState(false);
  const handleClick = () => setTap(!tap);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <nav className={color ? "navbar navbar-dark" : "navbar"}>
      <Link to="/">
        <h1>myPortfolio</h1>
      </Link>
      <ul className={tap ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about" className="font-space  text-white">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="font-space  text-white">
            Contact
          </Link>
        </li>
      </ul>
      <div className="ham-menu" onClick={handleClick}>
        {tap ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
};
