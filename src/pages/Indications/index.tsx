import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import { Indicates } from './styles';

const Indications: React.FC = () => {
  const [indications, setIndications] = useState([]);

  async function handleAddIndication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await api.get('')

  }

  return (
    <>
      <Indicates>
        <a href='teste'>
          <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="profile"/>
          <div>
            <strong>SOLANGE COSTA</strong>
            <p className="description">PROFESSORA - IF DUQUE DE CAXIAS</p>
          </div>
            <p className="text">Aluno dedicadom criativo e proativo</p>
        </a>
      </Indicates>
    </>
  );
};

export default Indications;