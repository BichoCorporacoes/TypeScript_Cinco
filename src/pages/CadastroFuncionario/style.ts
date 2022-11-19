import styled from "@emotion/styled";

export const Main = styled.div`
  main {
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    .p-inputgroup {
      margin: 1em;
      .password {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        font-size: 1rem;
        color: #495057;
        background: #ffffff;
        padding: 0.75rem 0.75rem;
        border: 1px solid #ced4da;
        width: 100%;
        transition: background-color 0.2s, color 0.2s, border-color 0.2s,
        box-shadow 0.2s;
        appearance: none;
        border-radius: 6px;
        border: 1px solid gray;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }

    .cadastroFuncionario {
      width: 50%;
      margin: auto;
    }
    .btn-controll {
      text-align: center;
      margin: 1em 0;
    }
  }
`;
