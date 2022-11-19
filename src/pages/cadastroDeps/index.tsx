import { useCallback, useEffect, useState } from "react";
import NavBarAtlantis from "../../components/nav";
import * as Z from "./styles";
import CadastroTelefone from "../../components/telefoneRegister/CadastroTell";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CadastroDocs from "../../components/DocsRegister/docsRegister";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CadastroAdminParteDoisDependentes() {
  const telefones = new CadastroTelefone();
  const documentos = new CadastroDocs();
  const { dependente } = useParams();
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <Z.Home>
      <NavBarAtlantis />
      <main>
        <div className="conteudo">
          <div className="formulario">
            <Tabs
              defaultActiveKey="docs"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="docs" title="Documentos">
                <div className="documento">
                  {documentos.formulario(dependente)}
                </div>
              </Tab>
              <Tab eventKey="tells" title="Telefone">
                <div className="telefones">
                  {telefones.formulario(dependente)}
                </div>
              </Tab>
            </Tabs>
          </div>
          <Link className="btn-end" to={-1}>
            Voltar
          </Link>
        </div>
      </main>
    </Z.Home>
  );
}
