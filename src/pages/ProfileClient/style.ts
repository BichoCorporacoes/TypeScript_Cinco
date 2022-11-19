import styled from "@emotion/styled";

export const Perfil = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Home = styled.div`
  .tabs {
    margin: 1em auto;
    border-color: gray;
    width: 50%;
    font-family: "Bebas Neue", cursive;
    font-size: 1.75em;
  }
  .info {
    .perfil {
      width: 100%;
      height: 75px;
      .overLay {
        float: right;
        button {
          width: 200px;
          font-size: 1.75em;
        }
      }
      .info-perfil {
        width: 50%;
        float: left;
        h3 {
          font-size: 1.75em;
          margin: 0;
          font-family: "Anton";
        }
        p {
          margin: 0;
          font-size: 1.5em;
        }
      }
    }
    .telefones {
      float: right;
      width: 50%;
      h3 {
        border-bottom: 1px solid gray;
        text-align: center;
        font-size: 2em;
        margin: 0;
        font-weight: bold;
      }
      .controllTell {
        width: 100%;
        height: 100px;
        overflow-x: hidden;
        font-size: 1.25em;
      }
      .tell {
        width: 50%;
        text-align: center;
        float: left;
      }
    }
    .endereco {
      width: 50%;
      float: left;
      h3 {
        border-bottom: 1px solid gray;
        text-align: center;
        font-size: 2em;
        margin: 0;
        font-weight: bold;
      }
      p {
        margin: 0;
        font-size: 1.25em;
      }
    }
    .documentosCliente {
      float: right;
      width: 50%;
      height: 120px;
      overflow-x: hidden;
      h3 {
        text-align: center;
        font-size: 2em;
        font-weight: bold;
      }
      button {
        margin: 0.25em 0.5em;
      }
    }
  }
  .info,
  .deps {
    width: 50%;
    margin: 0 auto;
    font-family: "Pathway Gothic One", sans-serif;
    font-weight: bold;
  }

  .deps {
    float: left;
    width: 100%;
    p {
      margin: 0;
    }
    .documentosDependente {
      padding: 1em;
      background-color: #fcfaf1;
      border-radius: 25px;
      border: 2px solid gray;
      h3 {
        font-size: 2em;
        margin: 0;
        font-family: "Bebas Neue", cursive;
      }
      p {
        width: 50%;
        margin: 0;
        font-size: 1.5em;
      }
      .telefonesDep {
        align-items: center;
        width: 100%;
        h3 {
          border-bottom: 1px solid gray;
        }
        .controllTellDependente {
          width: 100%;
          height: 100px;
          overflow-x: hidden;
          .telldependente {
            font-size: 1em;
          }
        }
      }
      .overLayDocsDeps {
        .docsConfig {
          width: 100%;
          height: 80px;
          display: flex;
          overflow-y: hidden;
        }
        h4 {
          font-size: 1.5em;
          font-weight: bold;
        }
        button {
          width: 75px;
          height: 50px;
          font-size: 1.5em;
          font-weight: bold;
          margin: 0em 0.25em 0em 0.25em;
        }
      }
    }
  }

  .controllTell::-webkit-scrollbar,
  .docsConfig::-webkit-scrollbar,
  .documentosCliente::-webkit-scrollbar,
  .controllTellDependente::-webkit-scrollbar {
    width: 0.25em;
  }
  .controllTell::-webkit-scrollbar-track,
  .docsConfig::-webkit-scrollbar-track,
  .documentosCliente::-webkit-scrollbar-track,
  .controllTellDependente::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #cacaca;
  }
  .controllTell::-webkit-scrollbar-thumb,
  .docsConfig::-webkit-scrollbar-thumb,
  .documentosCliente::-webkit-scrollbar-thumb,
  .controllTellDependente::-webkit-scrollbar-thumb {
    background-color: #343434;
  }
  .controllTell::-webkit-scrollbar-thumb:hover,
  .docsConfig::-webkit-scrollbar-thumb:hover,
  .documentosCliente::-webkit-scrollbar-thumb:hover,
  .controllTellDependente::-webkit-scrollbar-thumb:hover {
    background-color: #343434;
  }
`;
export const Reserva = styled.div`
  h1 {
    font-size: 1.75em;
  }
  .reserva {
    .camas span,
    .adicional span {
      font-weight: bold;
      font-size: 1.35em;
    }
    .camas p,
    .adicional p {
      margin: 0;
      font-size: 1.2em;
    }
  }
`;
export const Documentos = styled.div``;
