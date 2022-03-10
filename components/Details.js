import styled from "styled-components";
import theme from "../colors/theme";

function Details() {
  return (
    <Div>
      <h1>Advance Statistics</h1>
      <p>
        Track how your links are performing across the web with our advance
        statistics dashboard
      </p>
    </Div>
  );
}

export default Details;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12%;
  margin-right: 12%;
  padding-left: 16%;
  padding-right: 16%;

  p {
    text-align: center;
    color: ${theme.colors.gray};
    font-size: 2em;
  }

  h1{
      text-align: center;
      font-size: 2em;
  }

  @media only screen and (max-width: 480px) {
    margin: 0;
    margin-top: 2rem;
    margin-bottom: 4rem;

    
    
  }
`;
