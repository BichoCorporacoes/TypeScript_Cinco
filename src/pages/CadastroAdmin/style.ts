import styled from "@emotion/styled";

export const Home = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  main {
    margin: 0 auto;
    width: 100%;
    height: 92%;
    display: flex;
    .conteudo {
      background-color: #fcf9f2;
      margin: auto;
      width: 45%;
      height: 40%;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      .form-group {
        margin: 0 auto;
        width: 70%;
        font-weight: bold;
      }
      .btn-Controll {
        text-align: center;
      }
      h1 {
        padding: 25px;
        font-size: 50px;
        text-align: center;
        font-weight: bolder;
        font-family: "Handlee", cursive;
      }
      p {
        padding: 0.5em;
        margin: 0 auto;
        font-family: "Encode Sans Condensed", sans-serif;
        font-size: 25px;
      }
    }
  }
`;
