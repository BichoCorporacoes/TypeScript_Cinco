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
      width: 45%;
      height: 60%;
      border-radius: 25px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      h1 {
        padding: 25px;
        font-size: 50px;
        text-align: center;
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
