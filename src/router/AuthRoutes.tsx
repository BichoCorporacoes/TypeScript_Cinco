import { Route, Routes as RoutesWrapper } from "react-router-dom";
import CadastroAdminParteDois from "../pages/ParteDois";
import CadastroAdmin from "../pages/CadastroAdmin";
import Cliente from "../pages/Client";
import Home from "../pages/Home";
import ProfileCliente from "../pages/ProfileClient";
import Acomodacao from "../pages/acomodacao";
import CadastroFuncionario from "../pages/CadastroFuncionario";
import Teste from "../pages/teste/teste";
import { useAuth } from "../hooks/auth";
import CadastroAdminParteDoisDependentes from "../pages/cadastroDeps";

function AuthRoutes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Cliente />} />
      <Route path="/clientes/:id" element={<ProfileCliente />} />
      <Route path="/cliente/clientes-cadastro" element={<CadastroAdmin />} />
      <Route path="/acomodacao" element={<Acomodacao />} />
      <Route path="/teste" element={<Teste />} />
      <Route path="/funcionario/cadastro" element={<CadastroFuncionario />} />
      <Route
        path="/cliente/cadastro-continue/:id"
        element={<CadastroAdminParteDois />}
      />
      <Route
        path="/cliente/cadastro-continue/:id/:dependente"
        element={<CadastroAdminParteDoisDependentes />}
      />
    </RoutesWrapper>
  );
}
export default AuthRoutes;
