import styled from 'styled-components';

export const Indicates = styled.div`
  
  margin-top: 80px;
  max-width: 260px;

  a {
    background: #fffcff;
    border-radius: 5px;
    width: 100%auto;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%
  }

  div {
    margin-left: 16px;

    strong{
      font-size: 12px;
      color: #438989;
    }

    p.description {
      font-size: 8px;
      margin-top: 4px;
      color: #438989;
    }
  }

  p.text {
    color: #438989;
  }
`;

