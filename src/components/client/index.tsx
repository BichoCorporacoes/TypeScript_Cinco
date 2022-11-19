import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import * as Z from "./style";
export default class Client {
  card(nome: string, cpf: string, reserva: string, link: string) {
    return (
      <Z.Home>
        <Card border="secondary" className="card-style">
          <Card.Header className="header-style">
            <div className="items">
              <div className="nome">{nome}</div>
              <div className="cpf">
                Documento: <span>{cpf}</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="body-style">
            <Card.Text className="text-style">
              <div className="items">
                <div className="reserva">
                  Reserva: <span>{reserva}</span>
                </div>
                <div className="link">
                  <Link to={`/clientes/${link}`}>Ver Mais</Link>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Z.Home>
    );
  }
}
