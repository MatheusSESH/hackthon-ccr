import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 100%;

  background: #438989;
`;

export const IndicatesContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  
`;

export const Indicates = styled.div`
  margin-top: 10px;
  max-width: 700px;

  margin: 0 auto;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  div.CardContent {
    min-width: 350px;
    max-width: 500px;
    min-height: 100px;
    max-height: 500px;
    padding: 24px;
    color: #3a3a3a;

    display: block;
    border-radius: 10px;
    text-decoration: none;

    background: #fffcff;
  }

  div.header {
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: initial;
   
    img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

    div.header-description {
      display:flex;
      justify-content: center;
      flex-direction: column;
      align-items: initial;
      margin-left: 10px;
    }

    div.header-description p {
      font-size: 14px;
    }
  }

  div.text {
    margin-top: 30px;

    p {
      font-size: 14px;
    }
  }
`;

