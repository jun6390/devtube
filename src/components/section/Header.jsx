import React, { useState } from "react";

import Logo from "../header/Logo";
import Menu from "../header/Menu";
import Sns from "../header/Sns";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header id="header" className={isMenuActive ? "active" : ""}>
      <button
        className="header__hamburger"
        onClick={toggleMenu}
        aria-label={isMenuActive ? "메뉴 닫기" : "메뉴 열기"}
        aria-controls="primary-navigation"
        aria-expanded={isMenuActive}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <Logo />
      <Menu />
      <Sns />
    </header>
  );
};

export default Header;
