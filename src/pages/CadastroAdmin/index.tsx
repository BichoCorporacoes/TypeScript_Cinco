import { useCallback } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/service";
import NavBarAtlantis from "../../components/nav";
import * as Z from "./style";
import { useForm } from "react-hook-form";

interface CadastroUsuario {
  id: number;
  nome: string;
  nomeSocial: string;
}

export default function CadastroAdmin() {
  const navigate = useNavigate();

  const cadastroTitular = useCallback(async (data: CadastroUsuario) => {
    await api
      .post<CadastroUsuario>(`/cliente/cadastro`, {
        nome: data.nome,
        nomeSocial: data.nomeSocial,
        titular: true,
        dependente: [],
      })
      .then((response) => {
        navigate(`/cliente/cadastro-continue/${response.data}`);
      })
      .catch();
  }, []);

  const onSubmit = useCallback(async (data: CadastroUsuario) => {
    cadastroTitular(data);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroUsuario>({
    mode: "onBlur",
  });

  return (
    <Z.Home>
      <NavBarAtlantis />
      <main>
        <div className="conteudo">
          <h1>Cadastro de Reserva Cliente Inicial</h1>
          <div className="formulario">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                className="mb-3 form-group"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nome do titular</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gabriel Souza Bicho Nunes"
                  {...register("nome")}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 form-group"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nome Social do titular</Form.Label>
                <Form.Control
                  {...register("nomeSocial")}
                  type="text"
                  placeholder="BichoNunes"
                />
              </Form.Group>
              <div className="btn-Controll">
                <Button as="input" type="submit" value="Submit" />
              </div>
            </Form>
          </div>
        </div>
      </main>
    </Z.Home>
  );
}
