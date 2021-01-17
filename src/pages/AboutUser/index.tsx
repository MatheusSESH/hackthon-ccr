import React, { useState, useEffect } from 'react';

import { PersonData, 
  PersonAdress, 
  AcademicTraining,
  SocialNetworks,
  Interests,
  Langueges,
  AboutDataContainer
} from './styles';

import api from '../../services/api';

interface InterestDTO {
  id: number;
  nome: string;
}

const AboutUser: React.FC = () => {
  const [userInterests, setInterests] = useState<InterestDTO[]>([]);

  useEffect(() => {
    async function handleUserData() {
      const response = await api.get('/interesse/consultar');
  
      console.log(response.data);

      setInterests(response.data);
    }

    handleUserData();
  }, []);

  return (
    <>
      <AboutDataContainer>
        <PersonData >
          <strong>Dados Pessoais</strong>
            <p>Idade:</p>
            <p>Gênero:</p>
            <p>Nacionalidade:</p>
            <p>Autodeclaração:</p>
            <p>Estado Civil:</p>
            <p>Possui Filhos:</p>
        </PersonData>

        <PersonAdress>
          <strong>Endereço</strong>
            <p>Alameda Andreia</p>
        </PersonAdress>

        <AcademicTraining>
          <strong>Formação Acadêmica</strong>
            <p>Ensino médio completo</p>
            <p>Intituto Duque de Caxias</p>
        </AcademicTraining>

        <SocialNetworks>
          <strong>Redes Sociais</strong>
            <p>LinkedIn:</p>
            <p>Instagram:</p>
            <p>Facebook:</p>
        </SocialNetworks>

        <Interests>
          <strong>Interesses</strong>

            {userInterests.map(interests => {
              return(
                <p>{interests.nome}</p>
              )
            })}

        </Interests>

        <Langueges>
          <strong>Idiomas</strong>
            <p>Ingles:</p>
            <p>Espanhol:</p>
            <p>Português:</p>
        </Langueges>
      </AboutDataContainer>
    </>
  );
}

export default AboutUser;