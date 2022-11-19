import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    width: 50%;
    margin: 10em auto;
    .acomodacao {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .acorde {
        margin-bottom: 1em;
        .header-main {
          display: flex;
          align-items: center;
          width: 100%;
          font-size: 1.5em;
        }
        width: 650px;
        .header {
          justify-content: space-around;
          width: 100%;
        }
        .body {
          h3 {
            font-family: "Encode Sans Condensed", sans-serif;
            font-size: 1.5em;
            font-weight: bolder;
            padding: 0;
            margin: 0;
          }
          span {
            margin: 0;
            padding: 0;
            font-size: 1.25;
          }
        }
        .btn {
          color: blue;
          background-color: white;
        }
      }
    }
  }
`;
