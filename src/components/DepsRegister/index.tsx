import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Alert, Button, Form } from "react-bootstrap";
import { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/service";
import { Usuario } from "../../interfaces/cliente";
type CadastroDeps = {
  nome: string;
  nomeSocial: string;
};
export default class DependenteCadastro {
  formulario() {
    const { id } = useParams();
    const [status, setStatus] = useState({
      type: "",
      mensagem: "",
    });
    const [deps, setDeps] = useState<Usuario>();
    const cadastroDependente = useCallback(async (data: CadastroDeps) => {
      await api
        .put<CadastroDeps>(`/cliente/cadastro-dependente/${id}`, {
          nome: data.nome,
          nomeSocial: data.nomeSocial,
        })
        .then((response) => {
          setStatus({
            type: "sucesso",
            mensagem: "Dependente cadastrado com sucesso",
          });
        })
        .catch((err) =>
          setStatus({
            type: "error",
            mensagem: err.response.data,
          })
        );
    }, []);
    const onSubmit = useCallback(async (data: CadastroDeps) => {
      cadastroDependente(data);
    }, []);

    async function getDepentes() {
      const response = await api.get<Usuario>(`/cliente/cliente-titular/${id}`);
      setDeps(response.data);
    }
    useEffect(() => {
      getDepentes();
    });
    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
      control,
    } = useForm<CadastroDeps>({});
    return (
      <Form onSubmit={handleSubmit(onSubmit)} className="Controll">
        {[
          status.type === "error" ? (
            <Alert
              key="danger"
              variant={"danger"}
              style={{ textAlign: "center" }}
            >
              {status.mensagem}
            </Alert>
          ) : (
            " "
          ),
        ]}
        {[
          status.type === "sucesso" ? (
            <Alert
              key="danger"
              variant={"primary"}
              style={{ textAlign: "center" }}
            >
              {status.mensagem}
            </Alert>
          ) : (
            " "
          ),
        ]}
        <div className="controll">
          <h3>Cadastrar Dependente</h3>
          <div className="controll-label">
            <label>Nome</label>
            <InputText id="Nome" {...register("nome")} />
            <label>Nome Social</label>
            <InputText id="Nome Social" {...register("nomeSocial")} />
          </div>
          <Button type="submit" variant="success">
            Registrar Dep.
          </Button>
        </div>
        <div className="controll-cadastrados">
          <h3>Dependentes Cadastrados até o momento...</h3>
          {deps &&
            deps?.dependente?.map((dep) => {
              return (
                <div key={dep.id}>
                  <h6>{dep.nome}</h6>
                  <span>
                    <Link to={`/cliente/cadastro-continue/${id}/${dep.id}`}>
                      Adicionar itens
                    </Link>
                  </span>
                </div>
              );
            })}
        </div>
      </Form>
    );
  }
}
