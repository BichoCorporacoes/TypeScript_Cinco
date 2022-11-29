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
      height: 90%;
      border-radius: 5px;
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
    .btn-end {
      font-weight: bold;
      position: absolute;
      right: 19%;
      top: 50%;
      color: white;
      height: 50px;
      border-radius: 15px;
      width: 150px;
      border: 1px solid white;
      background-color: #0d6efd;
      transition: 0.5s linear;
    }
    .btn-end:hover {
      color: #0d6efd;
      background-color: white;
      border: 1px solid #0d6efd;
    }
    .documento {
      width: 70%;
      display: flex;
      margin: 0 auto;
      height: 650px;
      overflow-x: hidden;
      .docs-controll {
        width: 100%;
        h3 {
          font-weight: bolder;
          text-align: center;
        }
        .controll-documentos {
        }
        .testeDiv {
          height: 100%;
          overflow-x: hidden;
        }
        .controll {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          .form-Controll {
            color: black;
            font-size: 1.25em;
            font-weight: bolder;
          }
          .check-doc {
            display: flex;
          }
        }
        .controll-info {
          width: 100%;
          .label-numbers {
            margin-top: 1em;
            text-align: center;
            width: 100%;
            label {
              font-size: 1em;
              font-weight: bolder;
              width: 100%;
            }
          }
          .label-data {
            margin-top: 1em;
            text-align: center;
            width: 100%;
            label {
              font-size: 1em;
              font-weight: bolder;
              width: 100%;
            }
          }
        }
        .label-btn {
          margin: 1em 0;
          text-align: center;
        }
      }
      .testeDiv::-webkit-scrollbar {
        width: 0.5em;
      }
      .testeDiv::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #cacaca;
      }
      .testeDiv::-webkit-scrollbar-thumb {
        background-color: #343434;
      }
      .testeDiv::-webkit-scrollbar-thumb:hover {
        background-color: #343434;
      }
    }
    .telefones {
      width: 50%;
      display: flex;
      margin: 0 auto;
      .tell-controll {
        width: 100%;
        h3 {
          text-align: center;
          font-weight: bolder;
        }
        .controll {
          text-align: center;
          .btn-append {
            position: absolute;
            top: 50%;
            right: 30%;
            width: 150px;
            background-color: green;
            color: white;
            font-weight: bolder;
            height: 50px;
            transition: 0.5s;
          }
          .btn-submit {
            position: absolute;
            top: 50%;
            right: 60%;
            width: 150px;
            height: 50px;
            transition: 0.5s;
          }
          .btn-append:hover {
            color: green;
            background-color: white;
            border: 1px solid green;
          }
          label {
            font-weight: bolder;
            width: 100%;
          }
          .display {
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: cetner;
            .ddd {
              width: 60px;
              .input-mask {
                width: 100%;
              }
            }
            .numero {
              width: 150px;
              .input-mask {
                width: 100%;
              }
            }
            .btn-remove {
              margin-left: 1em;
              height: 35px;
            }
          }
          height: 650px;
          overflow-x: hidden;
        }
      }
      .controll::-webkit-scrollbar {
        width: 0.5em;
      }
      .controll::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #cacaca;
      }
      .controll::-webkit-scrollbar-thumb {
        background-color: #343434;
      }
      .controll::-webkit-scrollbar-thumb:hover {
        background-color: #343434;
      }
    }
    .dependentes {
      .Controll {
        h3 {
          font-weight: bolder;
          text-align: center;
        }
        .controll {
          text-align: center;
          .controll-label {
            display: flex;
            flex-direction: column;
            label {
              font-size: 1em;
              font-weight: bolder;
            }
            input {
              margin: 0 auto;
              width: 350px;
              margin-bottom: 1em;
            }
          }
        }
      }
    }
    .endereco {
      .controll {
        align-items: center;
        h3 {
          font-weight: bolder;
          text-align: center;
        }
        .end-controll {
          .span-controll {
            margin: 1.35em 0;
          }
          margin: 0 auto;
          width: 25%;
        }
      }
    }
  }
`;
