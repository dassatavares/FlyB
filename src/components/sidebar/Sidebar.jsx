import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./sidebar.css";

// Icons
import {
  BsFillHouseFill,
  BsGearFill,
  BsXLg,
  BsBoxArrowInLeft
} from "react-icons/bs";

const Sidebar = ({ menuToggle, setMenuToggle }) => {
  return (
    <>
      <div className={menuToggle ? "sidebar open" : "sidebar close"}>
        <div className="close-icon">
          <BsXLg onClick={() => setMenuToggle(!menuToggle)} className="icon" />
        </div>

        <div className="img-logo">
          <img
            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png"
            alt=""
          />
        </div>

        <div className="search">
          <input type="text" placeholder="Search" />
        </div>

        <ul>
          <Link to="/">
            <li>
              <BsFillHouseFill className="icon" /> Início
            </li>
          </Link>
          <Link to="/">
            <li>
              <BsGearFill className="icon" /> Configurações
            </li>
          </Link>
          <Link to="/">
            <li>
              <BsBoxArrowInLeft className="icon" /> Sair
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;