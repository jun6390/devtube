import React from "react";

import { headerMenus, searchKeyword } from "../../data/header";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  return (
    <nav
      id="primary-navigation"
      className="header__menu"
      aria-label="주요 메뉴"
    >
      <ul className="menu">
        {headerMenus.map((menu, key) => {
          const isActive = location.pathname === menu.src;

          return (
            <li key={key} className={isActive ? "active" : ""}>
              <Link to={menu.src} aria-current={isActive ? "page" : undefined}>
                {React.cloneElement(menu.icon, {
                  "aria-hidden": true,
                  focusable: "false",
                })}
                <span>{menu.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="keyword" aria-label="추천 검색어">
        {searchKeyword.map((keyword, key) => {
          const isActive = location.pathname === keyword.src;

          return (
            <li key={key} className={isActive ? "active" : ""}>
              <Link
                to={keyword.src}
                aria-current={isActive ? "page" : undefined}
              >
                {keyword.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
