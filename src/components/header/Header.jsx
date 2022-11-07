import React from "react";

// Imports
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

// Icons
import {
  BsList
} from "react-icons/bs";

const Header = ({ menuToggle, setMenuToggle }) => {
  
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <BsList onClick={() => setMenuToggle(!menuToggle)} className="icon" /> 
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
