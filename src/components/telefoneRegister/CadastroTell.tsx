import { InputMask } from "primereact/inputmask";
import { useCallback, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { api } from "../../api/service";

type Telefones = {
  telefone: {
    numero: string;
    ddd: string;
  }[];
};

export default class CadastroTelefone {
  formulario(id: string | undefined | number) {
    const [status, setStatus] = useState({
      type: "",
      mensagem: "",
    });

    const cadastroTelefone = useCallback(async (data: Telefones) => {
      await api
        .put<Telefones>(`/tell/cadastro-telefone/${id}`, data.telefone)
        .then((response) => {
          console.log(response);
        })
        .catch((err) =>
          setStatus({
            type: "error",
            mensagem: err.response.data,
          })
        );
    }, []);
    const onSubmit = useCallback(async (data: Telefones) => {
      cadastroTelefone(data);
    }, []);
    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
      control,
    } = useForm<Telefones>({
      defaultValues: {
        telefone: [{ numero: "", ddd: "" }],
      },
    });

    const { fields, append, remove } = useFieldArray({
      name: "telefone",
      control,
      rules: {
        required: "Por favor, adicionar 1 ou vários produtos",
      },
    });

    return (
      <Form onSubmit={handleSubmit(onSubmit)} className="tell-controll">
        <h3>Cadastro de telefones</h3>
        <div className="controll">
          {fields.map((item, index) => {
            return (
              <div key={item.id}>
                <label htmlFor="basic">Digite o Numero do telefone</label>
                <div className="display">
                  <div className="ddd">
                    <InputMask
                      id="CPF"
                      mask="(99)"
                      placeholder="(XX)"
                      required
                      {...register(`telefone.${index}.ddd`)}
                      className="input-mask "
                    ></InputMask>
                  </div>
                  <div className="numero">
                    <InputMask
                      id="CPF"
                      mask="99999-9999"
                      placeholder="XXXXX-XXXX"
                      required
                      {...register(`telefone.${index}.numero`)}
                      className="input-mask numero"
                    ></InputMask>
                  </div>
                  <Button
                    className="btn-remove"
                    variant="warning"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            );
          })}
          <Button
            variant="warning"
            onClick={() => {
              append({
                numero: "",
                ddd: "",
              });
            }}
            className="btn-append"
          >
            Add More
          </Button>
          <Button type="submit" variant="dark" className="btn-submit">
            Adicionar
          </Button>
        </div>
      </Form>
    );
  }
}
