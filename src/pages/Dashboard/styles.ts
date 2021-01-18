import styled from 'styled-components';

export const DashboardContent = styled.div`
  width: 100%;
  height: 100%;

  background: #e4572e;
`;

export const DashboardContainerCard = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Card = styled.div`
  margin-top: 10px;
  max-width: 700px;

  margin: 0 auto;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  div.CardContent {
    min-width: 350px;
    max-width: 700px;
    min-height: 100px;
    max-height: 500px;
    padding: 24px;
    color: #3a3a3a;

    display: block;
    border-radius: 10px;
    text-decoration: none;

    background: #fffcff;
  }

  div.header{
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: initial;
   
    p {
      font-size: 16px;
    }
  }

  div.descript {
    display:flex;
    justify-content: initial;
    flex-direction: row;
    align-items: center;

    margin-top: 5px;

    p {
      font-size: 14px;
      margin-right: 5px;
    }
  }

  div.text {
    margin-top: 30px;

    p {
      font-size: 14px;
    }
  }
`;