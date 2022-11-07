import React, { useState, useEffect } from "react";

// CSS
import "./home.css";

// Components
import Header from "../../components/header/Header.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";


const Login = () => {
  // Fetch
  const [datas, setData] = useState([]);

  
  // Menu Toggle
  const [menuToggle, setMenuToggle] = useState();

  return (
    <>
      <Sidebar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />

      <Header menuToggle={menuToggle} setMenuToggle={setMenuToggle} />

      <div className="container">
        {datas.map((data) => (
          <h1>{data.titulo}</h1>
        ))}
      </div>
    </>
  );
};

export default Login;
