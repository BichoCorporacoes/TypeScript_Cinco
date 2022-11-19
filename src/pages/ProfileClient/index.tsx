import NavBarAtlantis from "../../components/nav";
import * as Z from "./style";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Usuario } from "../../interfaces/cliente";
import { api } from "../../api/service";
import { Link, useParams } from "react-router-dom";

export default function ProfileCliente() {
  const [user, setUser] = useState<Usuario>();
  const { id } = useParams();
  async function getUser() {
    const response = await api.get<Usuario>(`/cliente/cliente-titular/${id}`);
    setUser(response.data);
  }
  useEffect(() => {
    getUser();
  });
  const reservaFeita = (
    <Popover id="popover-basic">
      <Z.Reserva>
        <Popover.Header>
          <h1>{user?.acomodacao?.nomeAcomadacao}</h1>
        </Popover.Header>
        <Popover.Body className="reserva">
          <div>
            <div className="camas">
              <span>Quantidade de Camas</span>
              <p>solteiro: {user?.acomodacao?.camaSolteiro}</p>
              <p>Casal: {user?.acomodacao?.camaCasal}</p>
            </div>
            <div className="adicional">
              <span>Adicionais</span>
              <p>suite: {user?.acomodacao?.suite}</p>
              <p>
                Climatização:{" "}
                {converterBooleano(user?.acomodacao?.climatizacao)}
              </p>
              <p>garagem: {user?.acomodacao?.garagem}</p>
            </div>
          </div>
        </Popover.Body>
      </Z.Reserva>
    </Popover>
  );
  const documentoCliente = (data: string, numero: string) => {
    return (
      <Popover id="popover-basic">
        <Z.Documentos>
          <Popover.Body>
            <p>
              Data de emissão:
              <br /> {data}
            </p>
            <p>
              Numero do Documento: <br />
              {numero}
            </p>
          </Popover.Body>
        </Z.Documentos>
      </Popover>
    );
  };
  function converterBooleano(valor: boolean | undefined) {
    if (valor) {
      return `Sim`;
    } else {
      return `Não`;
    }
  }
  function dependentesTrue(valor: number) {
    /* if (valor > 0) {
      return false;
    } else {
      return true;
    } */
  }
  return (
    <Z.Perfil>
      <NavBarAtlantis />
      <Z.Home>
        <Tabs
          defaultActiveKey="info"
          id="fill-tab-example"
          className="mb-3 tabs"
          fill
        >
          <Tab eventKey="info" title="Informações Basicas">
            <div className="info">
              <div className="perfil">
                <div className="info-perfil">
                  <h3>Nome: {user?.nome}</h3>
                  <p>Nome Social: {user?.nomeSocial}</p>
                </div>
                <div className="overLay">
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={reservaFeita}
                  >
                    <Button size="lg" variant="outline-success">
                      Checar reserva
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>

              <div className="telefones">
                <h3>Telefones</h3>
                <div className="controllTell">
                  {user?.telefones?.map((tell, index) => {
                    return (
                      <div className="tell">
                        {index + 1} - {tell.ddd} - {tell.numero}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="endereco">
                <h3>Endereço</h3>
                <p>Pais: {user?.endereco?.pais}</p>
                <p>Estado: {user?.endereco?.estado}</p>
                <p>Cidade: {user?.endereco?.cidade}</p>
                <p>Bairro: {user?.endereco?.bairro}</p>
                <p>Rua: {user?.endereco?.rua}</p>
                <p>Numero: {user?.endereco?.numero}</p>
              </div>
              <div className="documentosCliente">
                <h3>Documentos</h3>
                <div className="overLayDocs">
                  {user?.documentos?.map((docs) => {
                    return (
                      <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={documentoCliente(
                          docs.dataEmissao,
                          docs.numero
                        )}
                      >
                        <Button size="lg" variant="outline-primary">
                          {docs.tipo}
                        </Button>
                      </OverlayTrigger>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link></Link>
          </Tab>
          <Tab
            eventKey="deps"
            title="Dependente"
            /* disabled={dependentesTrue(user?.dependente?.length)} */
          >
            <div className="info">
              <div className="deps">
                {user?.dependente?.map((dep) => {
                  return (
                    <div className="documentosDependente">
                      <Link to={`/cliente/cadastro-continue/${id}/${dep.id}`}>
                        Adicionar itens
                      </Link>
                      <h3>Nome: {dep.nome}</h3>
                      <p>Nome Social: {dep.nomeSocial}</p>
                      <div className="overLayDocsDeps">
                        <div className="telefonesDep">
                          <h3>Telefones: </h3>
                          <div className="controllTellDependente">
                            {dep?.telefones?.map((tell, index) => {
                              return (
                                <div className="telldependente">
                                  [{index + 1}] ({tell.ddd}) {tell.numero}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <h4>Documentos</h4>
                        <div className="docsConfig">
                          {dep?.documentos?.map((docs) => {
                            return (
                              <OverlayTrigger
                                trigger="click"
                                placement="bottom"
                                overlay={documentoCliente(
                                  docs.dataEmissao,
                                  docs.numero
                                )}
                              >
                                <Button size="lg" variant="outline-primary">
                                  {docs.tipo}
                                </Button>
                              </OverlayTrigger>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Tab>
        </Tabs>
      </Z.Home>
    </Z.Perfil>
  );
}
