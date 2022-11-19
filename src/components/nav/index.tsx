import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

import * as Z from "./style";
import { useAuth } from "../../hooks/auth";
export default function NavBarAtlantis() {
  const { Logout, signed } = useAuth();

  const admin = sessionStorage.getItem("user-info")?.includes("ROLE_ADMIN");
  function findAdmin() {
    if (admin) {
      return (
        <>
          <NavDropdown.Divider />
          <NavDropdown.Item className="DropDownItem">
            <Link to={"/funcionario/cadastro"}>Cadastrar Funcionarios</Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
        </>
      );
    }
  }
  return (
    <Z.NavBar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="atlantis">
          <Link to={"/"}>Antlatis</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="response"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="sideContent">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {["Acomodação", "Clientes", "Login"].map((itensNav) => {
                if (itensNav.includes("Clientes")) {
                  return (
                    <NavDropdown
                      title="Clientes"
                      id="collasible-nav-dropdown"
                      menuVariant="white"
                      key={itensNav}
                    >
                      <NavDropdown.Item className="DropDownItem">
                        <Link to={"/cliente/clientes-cadastro"}>
                          Cadastrar Clientes
                        </Link>
                      </NavDropdown.Item>
                      {findAdmin()}
                      <NavDropdown.Item className="DropDownItem">
                        <Link to={"/clientes"}>Listar Clientes</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  );
                } else if (itensNav.includes("Acomodação")) {
                  return (
                    <Nav.Link key="acomodacao">
                      <Link to={`/acomodacao`}>{itensNav}</Link>
                    </Nav.Link>
                  );
                } else if (itensNav.includes("Login")) {
                  if (signed) {
                    return (
                      <Nav.Link key="Sair">
                        <Link onClick={() => Logout()} to={`/`}>
                          Sair
                        </Link>
                      </Nav.Link>
                    );
                  }
                } else {
                  return (
                    <Nav.Link key="restante">
                      <Link to={`/${itensNav.toLowerCase()}`}>{itensNav}</Link>
                    </Nav.Link>
                  );
                }
              })}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Z.NavBar>
  );
}
