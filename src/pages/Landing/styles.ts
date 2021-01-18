import styled, { css } from 'styled-components';

interface HeaderProps {
   windowActive: string;
}

export const Container = styled.div`
   height: 100vh;
   width: 100%;
   
   display: flex;
   flex-direction: column;
   align-items: center;

`;

export const Header = styled.div<HeaderProps>`
   max-width: 960px;
   margin: 0 auto;
   padding: 40px 20px;
   margin-top: 50px;
   margin-bottom: 10px; 

   display: flex;
   justify-content: space-between;
   align-items: center;

   div {
      display: flex;
      justify-content: center;
      align-items: center;

         & + div {
            margin-left: 20px;
         }
      }
   
   button {
      font: 700 24px Roboto ;
      text-decoration: none;
      color: #d9481c ;
      border: none; 
      background: #fffcff;

      &:hover {
         cursor: pointer;
      }
   }

   ${(props) => props.windowActive === 'dashboard'
      && css`
         .dashboard{
            color: #d9481c;
         }
         .dashboard:after {
            content: '';
            background: #d9481c;
            width: auto;
            height: 6px;
            display: flex;
            flex-direction: column;
            border-top-left-radius: 6px;
            border-radius: 6px;
         }
      `}
   ${(props) => props.windowActive === 'indications'
      && css`
         .indications{
            color: #438989;
         }
         .indications:after {
            content: '';
            background: #438989;
            width: auto;
            height: 6px;
            display: flex;
            flex-direction: column;
            border-top-left-radius: 6px;
            border-radius: 6px;
         }
      `}
   ${(props) => props.windowActive === 'about'
      && css`
         .about{
            color: #f5bc00;
            background: #fffcff;
         }
         .about:after {
            content: '';
            background: #f5bc00;
            width: auto;
            height: 6px;
            display: flex;
            flex-direction: column;
            border-top-left-radius: 6px;
            border-radius: 6px;
         }
      `}
`;
