import React, { useState }  from 'react';

import Dashboard from '../Dashboard/index';
import AboutUser from '../AboutUser/index';
import Indications from '../Indications/index';
import TopNavigator from '../../components/TopNavigator';

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
    <TopNavigator />
      <Container>
        <Header windowActive={pageToShow}>
          <div className="buttonsNavigate">
            <div>
              <button type="button" onClick={() => handleChangePage('dashboard')} className="dashboard">Início</button>
            </div>
            <div>
              <button type="button" onClick={() => handleChangePage('indications')} className="indications">Indicações</button>
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