import React, { useContext } from "react";
import "./navbar.styles.scss";

import { useSelector } from "react-redux";

import UseWindowSize from "../../hooks/useWindowSize";

import { Link } from "react-router-dom";

import { AppContext } from "../../context/context";
import { OPEN_MENU_SIDEBAR } from "../../context/action.types";

// importing icons from react-icons
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Navbar() {
  const { dispatchAppState } = useContext(AppContext);
  const categories = useSelector((state) => state.home.productCategory);
  const { width } = UseWindowSize();
  const navChangeWidth = 1322;

  return width > navChangeWidth ? (
    <div className="navbar-bigger">
      <div className="logo">
        <Link to="/" className="link">
          <h2 className="logo_text">logoipsum</h2>
        </Link>
      </div>
      <div className="navlinks">
        <ul>
          {categories
            ? categories.length > 0
              ? categories.map((eachObj, key) => (
                  <Link
                    key={key}
                    className="nav-link"
                    to={`/category-page/${eachObj.id}`}
                  >
                    <li>{eachObj.main_menu}</li>
                  </Link>
                ))
              : null
            : null}
        </ul>
      </div>
      <div className="action_icons">
        <span className="shoping_cart icon">
          <AiOutlineShoppingCart />
          <span className="cart_items">3</span>
        </span>
        <span className="whishlist icon">
          <AiOutlineHeart />
        </span>
        <span className="search icon">
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  ) : (
    <div className="navbar-smaller">
      <div className="menu-and-wish-icon">
        <span
          className="menu icon"
          onClick={() =>
            dispatchAppState({ type: OPEN_MENU_SIDEBAR, payload: "active" })
          }
        >
          <AiOutlineMenu />
        </span>
        <span className="whishlist icon">
          <AiOutlineHeart />
        </span>
      </div>

      <div className="logo">
        <Link to="/" className="link">
          <h2 className="logo_text">logoipsum</h2>
        </Link>
      </div>

      <div className="action_icons">
        <Link to="/cart" className="shoping_cart icon link" onClick={() => {}}>
          <AiOutlineShoppingCart />
          <span className="cart_items">3</span>
        </Link>

        <span className="search icon">
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  );
}
