import NavBarAtlantis from "../../components/nav";
import * as Z from "./style";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import { Alert, Button } from "react-bootstrap";
import { Password } from "primereact/password";
import { useCallback, useState } from "react";
import { api } from "../../api/service";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface CadastroFuncionario {
  nome: string;
  nomeSocial: string;
  email: string;
  password: string;
  nivel_de_acesso: "ROLE_ADMIN" | "ROLE_FUNCIONARIO";
}

export default function CadastroFuncionario() {
  const navigate = useNavigate()
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });
  const cadastroFuncionario = useCallback(async (data: CadastroFuncionario) => {
    await api
      .post<CadastroFuncionario>(`/cliente/cadastrar-funcionario`, {
        nome: data.nome,
        nomeSocial: data.nomeSocial,
        email: data.email,
        password: data.password,
        nivel_de_acesso: ["ROLE_FUNCIONARIO"],
      })
      .then(() => {
        navigate(`/clientes`)
      })
      .catch(function (err) {
        if (err.response) {
          setStatus({
            type: "error",
            mensagem: err.response.data,
          });
        }
      });
  }, []);

  const onSubmit = useCallback(async (data: CadastroFuncionario) => {
    cadastroFuncionario(data);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroFuncionario>({
    mode: "onBlur",
  });

  return (
    <Z.Main>
      <NavBarAtlantis />
      {status.type === "error" ? (
        <Alert key="danger" variant="danger" style={{ textAlign: "center" }}>
          {status.mensagem}
        </Alert>
      ) : (
        ""
      )}
      <main>
        <div className="cadastroFuncionario">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Nome" {...register("nome")} />
            </div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user-plus"></i>
              </span>
              <InputText
                placeholder="Nome Social"
                {...register("nomeSocial")}
              />
            </div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-at"></i>
              </span>
              <InputText placeholder="Email" {...register("email")} />
            </div>
            <div className="p-inputgroup">
              {" "}
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <input
                type="password"
                className="password"
                placeholder="Senha"
                {...register("password")}
              />
            </div>
            <div className="btn-controll">
              <Button type="submit" className="btn">
                Cadastrar Novo Funcionario
              </Button>
            </div>
          </form>
        </div>
      </main>
    </Z.Main>
  );
}
