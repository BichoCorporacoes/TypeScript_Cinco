import styled from "@emotion/styled";

export const Home = styled.div`
  .card-style {
    margin: 15px auto;
    width: 70%;
    display: flex;
    flex-direction: row;
    .header-style {
      border-right: 2px dashed gray;
      display: flex;
      width: 50%;
      .items {
        width: 100%;
        .nome {
          font-size: 1.5em;
          font-weight: bold;
          font-family: "Handlee", cursive;
        }
        .cpf {
          font-weight: bold;
          span {
            font-weight: 500;
            font-size: 1em;
            color:  #095D14;
          }
        }
      }
    }
    .body-style {
      display: flex;
      align-items: center;
      width: 10%;
      .text-style {
        display: inline-block;
        width: 100%;
        flex-direction: row;
        .items {
          display: flex;
          justify-content: space-around;
          .reserva {
            font-size: 1.25em;
            font-weight: bolder;
            span {
              font-weight: 500;
              font-size: 1em;
              color: #800000;
            }
          }
          .link a {
            text-decoration: none;
            font-weight: bolder;
            font-size: 1.25em;
            color: black;
          }

          .link a:hover {
            color: #e6b31e;
          }
        }
      }
    }
  }
`;
