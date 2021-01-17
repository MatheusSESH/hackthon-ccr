import styled, { css } from 'styled-components';

interface HeaderProps {
   windowActive: string;
}

export const Container = styled.div`
   height: 100vh;
   min-height: 90rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
export const Header = styled.div<HeaderProps>`
   margin-top: 5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 90%;
   div {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
         font-size: 3rem;
         &:hover {
            cursor: pointer;
         }
      }
      & + div {
         margin-left: 1.5rem;
      }
      img {
         margin: 0 2rem 0 3rem;
      }
   }
   button {
      font: 500 2rem Roboto;
      text-decoration: none;
      color: #d9481c ;
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
            height: 0.4rem;
            display: flex;
            flex-direction: column;
            border-top-left-radius: 0.4rem;
            border-radius: 0.4rem;
         }
      `}
   ${(props) => props.windowActive === 'board'
      && css`
         .board{
            color: #d9481c;
         }
         .board:after {
            content: '';
            background: #d9481c;
            width: auto;
            height: 0.4rem;
            display: flex;
            flex-direction: column;
            border-top-left-radius: 0.4rem;
            border-radius: 0.4rem;
         }
      `}
   ${(props) => props.windowActive === 'about'
      && css`
         .about{
            color: #d9481c;
         }
         .about:after {
            content: '';
            background: #d9481c;
            width: auto;
            height: 0.4rem;
            display: flex;
            flex-direction: column;
            border-top-left-radius: 0.4rem;
            border-radius: 0.4rem;
         }
      `}
`;
