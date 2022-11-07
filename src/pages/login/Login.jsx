import React, { useState } from "react";

// Boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// CSS
import "./login.css";

// Components
import Cadastro from "../../components/cadastro/Cadastro.jsx";

const Login = () => {
  const [IsActive, setIsActive] = useState(false);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="content">
              <div className="welcome">
                <p>Faça seu cadastro e ganhe 10% na primeira viagem</p>
                <h1>Voe pelo app da FlyB e aumente seus ganhos</h1>
                <br />
                <p>
                  Voe pelo app da FlyB, <br /> Fly Beyond.
                </p>
                <br />
                <span> Flyb © 2022</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="content">
              {!IsActive && (
                <div className="login">
                  <h3>Login</h3>
                  <form>
                    <img
                      src="https://cdn.forbesmedia.cz/images/eyJ1IjoiXC91cGxvYWRzXC8yMDIxXC8wNFwvYmlsbC1nYXRlcy5qcGciLCJ3Ijo0MTYsInYiOiIxLjAifQ%3D%3D.jpg"
                      alt=""
                    />
                    <input type="email" placeholder="E-mail" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit" className="button-1">
                      Login
                    </button>
                    <button
                      type="button"
                      className="button-2"
                      onClick={() => setIsActive(true)}
                    >
                      Cadastrar-se
                    </button>
                  </form>

                  <p>
                    <a href="www.google.com.br" className="password">
                      Esqueci minha senha
                    </a>
                  </p>
                </div>
              )}

              {IsActive && <Cadastro setIsActive={setIsActive} />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
