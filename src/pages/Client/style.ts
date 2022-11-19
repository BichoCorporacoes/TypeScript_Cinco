import styled from "@emotion/styled";

export const Home = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  main {
    height: 92%;
    display: flex;
    .conteudo {
      background-color: #fcf9f2;
      margin: auto;
      width: 60%;
      height: 80%;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      h1 {
        background-color: #fcf9f2;
        padding: 5px;
        font-size: 50px;
        border-bottom: 3px dashed black;
        text-align: center;
        font-family: "Handlee", cursive;
      }
      .mapCliente {
        margin-top: -0.4em;
 
        height: 88.3%;
        overflow-x: hidden;

      }
    }
    .mapCliente::-webkit-scrollbar {
      width: 1em;
    }
    .mapCliente::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #cacaca;
    }
    .mapCliente::-webkit-scrollbar-thumb {
      background-color: #343434;
    }
    .mapCliente::-webkit-scrollbar-thumb:hover {
      background-color: #343434;
    }
  }
`;
