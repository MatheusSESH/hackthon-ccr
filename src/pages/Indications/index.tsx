import React, { useState } from 'react';

// import api from '../../services/api';

import { Indicates, Body, IndicatesContainer } from './styles';

import profile1 from '../../assets/first-indication.png';
import profile2 from '../../assets/second-indication.png';


const Indications: React.FC = () => {
  const [indications, setIndications] = useState([]);

  return (
    <>
      <Body>
        <IndicatesContainer>
          <Indicates>
            <div className="CardContent" >
              <div className="header">
                <img src={profile1} alt="profile"/>
                <div className="header-description">
                  <strong>SOLANGE COSTA</strong>
                  <p>PROFESSORA - IF DUQUE DE CAXIAS</p>
                </div>
              </div>
              <div className="text">
                <p>Aluno dedicado, criativo e proativo. Sempre ajudou
                  com o uso do projetor.Excelente trabalho no projeto de extenção e pesquisa
                </p>
              </div>
            </div>
            </Indicates>
            <Indicates>
            <div className="CardContent" >
              <div className="header">
                <img src={profile2} alt="profile"/>
                <div className="header-description">
                  <strong>SOLANGE COSTA</strong>
                  <p>PROFESSORA - IF DUQUE DE CAXIAS</p>
                </div>
              </div>
              <div className="text">
                <p>Cooperativo, sempre ajudava os colegas e os motivava para 
                  alcançar os melhores resultados</p>
              </div>
            </div>
          </Indicates>

          <button>
            
          </button>
        </IndicatesContainer>
      </Body>
    </>
  );
};

export default Indications;
