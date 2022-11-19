import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { api } from "../../api/service";
import { useCallback } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

type Documentos = {
  documentos: {
    tipo: string;
    numero: string;
    dataEmissao: string;
  }[];
};
export default class DocumentoRegistro {
  formulario(id: string | undefined | number) {
    const [status, setStatus] = useState({
      type: "",
      mensagem: "",
    });

    const cadastroDocumento = useCallback(async (data: Documentos) => {
      await api
        .put<Documentos[]>(`/docs/cadastro-documentos/${id}`, data.documentos)
        .then((response) => {
          setStatus({
            type: "error",
            mensagem: response.data,
          });
        })
        .catch((err) =>
          setStatus({
            type: "error",
            mensagem: err.response.data,
          })
        );
    }, []);

    const onSubmit = useCallback(async (data: Documentos) => {
      cadastroDocumento(data);
    }, []);

    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
      control,
    } = useForm<Documentos>({
      defaultValues: {
        documentos: [{ tipo: "", numero: "", dataEmissao: "" }],
      },
    });
    const { fields, append, remove } = useFieldArray({
      name: "documentos",
      control,
      rules: {
        required: "Please append at least 1 item",
      },
    });

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        {[
          status.type === "error" ? (
            <Alert
              key="danger"
              variant="danger"
              style={{ textAlign: "center" }}
            >
              {status.mensagem}
            </Alert>
          ) : (
            ""
          ),
        ]}
        {fields.map((item, index) => {
          return (
            <div key={item.id}>
              <Form.Group className="controll-info">
                <div className="label-numbers">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Tipo
                    </InputGroup.Text>
                    <Form.Control
                      {...register(`documentos.${index}.tipo`)}
                      placeholder="Digite o tipo do Documento : CPF, RG ou Passaporte"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </div>
                <div className="label-numbers">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Numero do Documento
                    </InputGroup.Text>
                    <Form.Control
                      {...register(`documentos.${index}.numero`)}
                      placeholder="Digite o numero do documento"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </div>
                <div className="label-data">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                      Data Emissao
                    </InputGroup.Text>
                    <Form.Control
                      {...register(`documentos.${index}.dataEmissao`)}
                      placeholder="27/04/2001"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </div>
              </Form.Group>
              <Button
                variant="danger"
                type="button"
                onClick={() => remove(index)}
              >
                Delete
              </Button>
            </div>
          );
        })}
        <Button
          type="button"
          variant="primary"
          onClick={() => {
            append({
              tipo: "",
              numero: "",
              dataEmissao: "",
            });
          }}
        >
          Mais um
        </Button>
        <Button type="submit" variant="dark">
          Adicionar
        </Button>
      </Form>
    );
  }
}
