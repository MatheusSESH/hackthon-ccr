import styled from 'styled-components';

export const RobotStyle = styled.div`
  width: 100%;
  height: 100%;

  background: #e4572e;
`;

export const RobotContainer = styled.div`
  max-width: 700px;
  max-height: 960px;
  margin: 0 auto;
  padding: 20px 20px; 

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RobotAreaContent = styled.div`
  margin-top: 10px;
  max-width: 700px;

  margin: 0 auto;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div.title{
    margin-bottom: 10px;
    max-width: 700px;

    display: flex;
    justify-content: center;
    align-items: center;
   
    strong{
      font: 700 24px Roboto ;
      color: #fffcff;
    }
  }
  
  div.RobotContent {
    min-width: 350px;
    max-width: 700px;
    min-height: 100px;
    max-height: 500px;
    padding: 24px;
    color: #3a3a3a;
    background: #fffcff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 10px;

    span{
      color: #e4572e;
    }

    div.RenderQuestions {
      font: 700 24px Roboto ;
      text-decoration: none;
      color: #e4572e ;
      border: none; 
      background: #fffcff;

      margin-top: 20px;
    }

    button{
      font: 700 24px Roboto ;
      text-decoration: none;
      color: #e4572e ;
      border: none; 
      background: #fffcff;

      margin-top: 20px;
    }

    div.resultTest{
      min-width: 350px;
      max-width: 700px;
      min-height: 100px;
      max-height: 500px;
      padding: 24px;
      color: #3a3a3a;
      margin-top: 50px;
      background: #fffcff;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 10px;

      strong {

      }

      p {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
`;