import React, { useState }  from 'react';

import Dashboard from '../Dashboard/index';
import AboutUser from '../AboutUser/index';
import Indications from '../Indications/index';

import { Header, Container } from './styles';

const Landing: React.FC = () => {
  const [pageToShow, setPageToShow] = useState('dashboard');

  function handleChangePage(page: string) {
    setPageToShow(page);
  }

  let pageToRender;

  if (pageToShow === 'dashboard') {
    pageToRender = <Dashboard />;
  } else if (pageToShow === 'indications') {
    pageToRender = <Indications />;
  } else if (pageToShow === 'about') {
    pageToRender = <AboutUser />;
  } else {
    pageToRender = <div />;
  }

  return (
    <>
      <Container>
        <Header windowActive={pageToShow}>
          <div>
            <div>
              <button type="button" onClick={() => handleChangePage('dashboard')} className="dashboard">Início</button>
            </div>
            <div>
              <button type="button" onClick={() => handleChangePage('indications')} className="board">Indicações</button>
            </div>
            <div>
              <button type="button" onClick={() => handleChangePage('about')} className="about">Sobre</button>
            </div>
          </div>
        </Header>

        { pageToRender }

      </Container>

    </>
  );
};

export default Landing;