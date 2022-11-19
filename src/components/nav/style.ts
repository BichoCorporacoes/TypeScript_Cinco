import styled from "@emotion/styled";

export const NavBar = styled.div`
  box-shadow: 0 4px 2px -2px #e6b31e;
  width: 100vw;
  .atlantis {
    text-align: center;
    font-family: "Encode Sans Condensed", sans-serif;
    margin: auto;
    font-size: 2.5em;
    width: 25% ;
    a {
      color: #fcfaf1;
      text-decoration: none;
    }
    a:hover {
      color: #e6b31e;
    }
  }
  .sideContent {
    margin: auto;
    width: 70%;
    font-size: 25px;

    a {
      color: #fcfaf1;
      text-decoration: none;
    }
    a:hover {
      color: #e6b31e;
    }
    .DropDownItem a {
      color: #343434;
    }
    .DropDownItem a:hover {
      color: #e6b31e;
    }
  }
  .response {
    margin-right: 15px;
  }
`;
