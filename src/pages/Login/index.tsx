import { Alert, Button, Form } from "react-bootstrap";
import NavBarAtlantis from "../../components/nav";
import * as Z from "./styles";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";

interface LoginFuncionario {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { Login } = useAuth();

  async function handleLogin(data: LoginFuncionario) {
    await Login({
      email: data.email,
      password: data.password,
    });
  }
  const onSubmit = useCallback(async (data: LoginFuncionario) => {
    handleLogin(data);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFuncionario>({
    mode: "onBlur",
  });
  return (
    <Z.Main>
      <NavBarAtlantis />
      <main className="main">
        <div className="login-content">
          <Form onSubmit={handleSubmit(onSubmit)} className="formulario">
            <div className="controll-login">
              <h1>Efetue o login</h1>
              <label htmlFor="username2" className="block">
                Usuario
              </label>
              <InputText
                id="username2"
                aria-describedby="username2-help"
                {...register("email")}
              />
              <label htmlFor="username2" className="block">
                Senha
              </label>
              <input
                type="password"
                className="password"
                placeholder="Senha"
                {...register("password")}
              />
            </div>
            <div className="div">
              <Button type="submit" className="btn">
                Login
              </Button>
            </div>
          </Form>
        </div>
        <div className="img-content">
          <h1>Antlatis</h1>
        </div>
      </main>
    </Z.Main>
  );
}
