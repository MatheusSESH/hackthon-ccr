import React from 'react';

import { Course } from './styles';

const Courses: React.FC = () => {
  return (
    <>
    <Course>
        <a href='teste'>
          <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="profile"/>
          <div>
            <strong>SOLANGE COSTA</strong>
            <p className="description">PROFESSORA - IF DUQUE DE CAXIAS</p>
          </div>
            <p className="text">Aluno dedicadom criativo e proativo</p>
        </a>
      </Course>
    </>
  );
}

export default Courses;