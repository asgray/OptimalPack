import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>OptimalPack</h3>
      <ul>
        <Link to="/food">
          <li>Food</li>
        </Link>
        <Link to="/gear">
          <li>Gear</li>
        </Link>
        <Link to="/gear_type">
          <li>Gear Type</li>
        </Link>
        <Link to="/meal">
          <li>Meals</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
