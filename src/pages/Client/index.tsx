import { useEffect, useState } from "react";
import { api } from "../../api/service";
import Client from "../../components/client";
import NavBar from "../../components/nav";
import { Usuario } from "../../interfaces/cliente";
import * as Z from "./style";

export default function Cliente() {
  const cliente = new Client();
  const [deps, setDeps] = useState<Usuario[]>([]);
  async function getDepentes() {
    const response = await api.get<Usuario[]>(`/cliente/clientes-titulares`);
    setDeps(response.data);
  }
  useEffect(() => {
    getDepentes();
  });
  return (
    <Z.Home>
      <NavBar />
      <main>
        <div className="conteudo">
          <h1>Clientes Titulares</h1>
          <div className="mapCliente">
            {deps &&
              deps.map((cli) => {
                return (
                  <>
                    {cliente.card(
                      `${cli.nome}`,
                      `${cli?.documentos?.[0]?.numero}`,
                      `${cli?.acomodacao?.nomeAcomadacao}`,
                      `${cli.id}`
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </main>
    </Z.Home>
  );
}
