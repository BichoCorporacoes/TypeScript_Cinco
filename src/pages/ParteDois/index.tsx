import { useCallback, useEffect, useState } from "react";
import NavBarAtlantis from "../../components/nav";
import * as Z from "./style";
import { InputText } from "primereact/inputtext";
import CadastroTelefone from "../../components/telefoneRegister/CadastroTell";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate, useParams } from "react-router-dom";
import DependenteCadastro from "../../components/DepsRegister";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Button,
  DropdownButton,
  Form,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import { api } from "../../api/service";
import CadastroDocs from "../../components/DocsRegister/docsRegister";
import { Acomodacao } from "../../interfaces/acomodacao";
import DocumentoRegistro from "../../components/DocsRegister/docsRegister";

interface CadastroEndereco {
  rua: string;
  bairro: string;
  cep: string;
  pais: string;
  numero: string;
  cidade: string;
  nomeAcomadacao: string;
  camaSolteiro: number;
  camaCasal: number;
  suite: number;
  climatizacao: number;
  garagem: number;
  id: string[];
}

export default function CadastroAdminParteDois() {
  const telefones = new CadastroTelefone();
  const documentos = new DocumentoRegistro();
  const dependentes = new DependenteCadastro();
  const { id } = useParams();

  const [acomodacao, setAcomodacao] = useState<Acomodacao[]>([]);

  useEffect(() => {
    api.get(`/cliente/acomodacoes`).then((response) => {
      setAcomodacao(response.data);
    });
  }, []);

  const CadastroEndereco = useCallback(async (data: CadastroEndereco) => {
    await api
      .put<CadastroEndereco>(`/cliente/cadastro-endereco/${id}`, {
        rua: data.rua,
        bairro: data.bairro,
        cep: data.cep,
        pais: data.pais,
        numero: data.numero,
        cidade: data.cidade,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {});
  }, []);
  const CadastroAcomodacao = useCallback(async (data: CadastroEndereco) => {
    await api
      .put<CadastroEndereco>(`/cliente/cadastro-acomodacao/${id}`, {
        id: data.id[0],
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {});
  }, []);
  const onSubmit = useCallback(async (data: CadastroEndereco) => {
    CadastroEndereco(data);
  }, []);
  const onSubmitAcomodacao = useCallback(async (data: CadastroEndereco) => {
    CadastroAcomodacao(data);
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm<CadastroEndereco>({});
  const navigate = useNavigate();

  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [pais, setPais] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero, setNumero] = useState("");
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
                  {documentos.formulario(Number(id))}
                </div>
              </Tab>
              <Tab eventKey="tells" title="Telefone">
                <div className="telefones">
                  {telefones.formulario(Number(id))}
                </div>
              </Tab>
              <Tab eventKey="ends" title="Endereco/Acomodação">
                <div className="endereco">
                  <div className="controll">
                    <h3>Adicionar Endereço</h3>
                    <div className="end-controll">
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <span className="p-float-label span-controll">
                          <InputText
                            value={rua}
                            id="Rua"
                            {...register("rua")}
                            onChange={(e) => setRua(e.target.value)}
                          />
                          <label htmlFor="Rua">Rua</label>
                        </span>
                        <span className="p-float-label span-controll">
                          <InputText
                            id="Bairro"
                            value={bairro}
                            {...register("bairro")}
                            onChange={(e) => setBairro(e.target.value)}
                          />
                          <label htmlFor="Bairro">Bairro</label>
                        </span>
                        <span className="p-float-label span-controll">
                          <InputText
                            id="cidade"
                            value={cidade}
                            {...register("cidade")}
                            onChange={(e) => setCidade(e.target.value)}
                          />
                          <label htmlFor="cidade">Cidade</label>
                        </span>
                        <span className="p-float-label span-controll">
                          <InputText
                            id="numero"
                            value={numero}
                            {...register("numero")}
                            onChange={(e) => setNumero(e.target.value)}
                          />
                          <label htmlFor="numero">Numero</label>
                        </span>
                        <span className="p-float-label span-controll">
                          <InputText
                            value={cep}
                            id="cep"
                            {...register("cep")}
                            onChange={(e) => setCep(e.target.value)}
                          />
                          <label htmlFor="cep">Cep</label>
                        </span>
                        <span className="p-float-label span-controll">
                          <InputText
                            value={pais}
                            id="pais"
                            {...register("pais")}
                            onChange={(e) => setPais(e.target.value)}
                          />
                          <label htmlFor="pais">Pais</label>
                        </span>
                        <Button type="submit" style={{ width: "100%" }}>
                          Enviar
                        </Button>
                      </Form>
                    </div>
                    <hr />
                    <Form onSubmit={handleSubmit(onSubmitAcomodacao)}>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Dropdown button"
                        variant="secondary"
                        drop="up"
                      >
                        {acomodacao &&
                          acomodacao.map((quartos) => {
                            return (
                              <Form.Check
                                label={quartos.nomeAcomadacao}
                                key={quartos.id || quartos?.nomeAcomadacao}
                                value={quartos.id || quartos?.nomeAcomadacao}
                                type="radio"
                                {...register(`id`)}
                              />
                            );
                          })}
                        <Button type="submit" style={{ width: "100%" }}>
                          Enviar
                        </Button>
                      </DropdownButton>
                    </Form>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="deps" title="Dependentes">
                <div className="dependentes">{dependentes.formulario()}</div>
              </Tab>
            </Tabs>
          </div>
          <Link to={-1}>Terminar Cadastro</Link>
        </div>
      </main>
    </Z.Home>
  );
}

/*
rua
bairro
cidade
numero
cep
pais
estado
*/
