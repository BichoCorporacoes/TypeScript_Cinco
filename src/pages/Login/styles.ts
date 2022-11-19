import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  .main {
    display: flex;
    margin: auto 0;
    height: 90%;
    width: 100%;
    align-items: center;
    .login-content {
      width: 50%;
      height: 70%;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      .formulario {
        margin: auto;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 50%;
        .btn {
          margin-top: 1em;
          display: flex;
          width: 100%;
          font-size: 1.5em;
          justify-content: center;
        }
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
        .controll-login {
          label {
            font-size: 1.25em;
            font-weight: bolder;
          }
          h1 {
            text-align: center;
          }
          text-align: left;
          input {
            width: 100%;
          }
          .password {
            width: 100%;
          }
          width: 100%;
        }
      }
    }
    .img-content {
      width: 50%;
      height: 70%;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      h1 {
        font-family: "Encode Sans Condensed", sans-serif;
        font-variant: small-caps;
        font-weight: bolder;
        font-style: italic;
        font-size: 12em;
        text-shadow: 0 0 2px #ff0000, 0 0 2px #e6b31e;
      }
    }
  }
`;
