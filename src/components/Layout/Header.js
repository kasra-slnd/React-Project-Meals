import React, { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton myOnClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
