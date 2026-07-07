import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className="header__logo">
      <Link to="/" aria-label="DevTube 홈">
        <img
          className="brand__mark"
          src="/favicon.svg"
          alt=""
          width="34"
          height="34"
          loading="eager"
          decoding="async"
        />
        <span className="brand__name">
          <span>Dev</span>
          <span className="brand__accent">Tube</span>
        </span>
      </Link>
    </h1>
  );
};

export default Logo;
