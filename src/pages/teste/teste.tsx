import { useCallback, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { api } from "../../api/service";
import { Usuario } from "../../interfaces/cliente";

type Documentos = {
  documento: {
    tipo: string;
    numero: string;
    dataEmissao: string;
  }[];
};

export default function Teste() {
  const [deps, setDeps] = useState<Usuario[]>([]);
  async function getDepentes() {
    const response = await api.get<Usuario[]>(`/cliente/clientes-titulares`);
    setDeps(response.data);
  }
  useEffect(() => {
    getDepentes();
  });
  return (
    <>
      {/* {deps &&
        deps.dependente.map((dep) => {
          return (
            <div key={dep.id}>
              <h6>{dep.nome}</h6>
              <span>
                adicionar{" "}
                <a rel="stylesheet" href="#">
                  documentos | telefones{" "}
                </a>
              </span>
            </div>
          );
        })} */}
    </>
  );
}
