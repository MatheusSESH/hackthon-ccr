import React, { useState, useEffect } from 'react';

import { PersonData, 
  PersonAdress, 
  AcademicTraining,
  SocialNetworks,
  Interests,
  Langueges,
  AboutDataContainer,
  Body,
  AboutUserImgArea
} from './styles';

import api from '../../services/api';

import Profile from '../../assets/gabriel-souza.png';

interface Interest {
  id: number;
  nome: string;
}

const AboutUser: React.FC = () => {
  const [userInterests, setInterests] = useState<Interest[]>([]);
  
  useEffect(() => {
    async function handleUserData() {
      const response = await api.get('/interesse/consultar');

      setInterests(response.data);

    }

    handleUserData();
  }, []);

  return (
    <>
      <Body>
        <AboutUserImgArea>
          <div>
            <img src={Profile} alt="Gabriel Souza"/>
            <strong>Gabriel Souza</strong>
            <p>18, Belford Roxo, RJ</p>
          </div>
        </AboutUserImgArea>
        <AboutDataContainer>
          <PersonData >
            <strong>Dados Pessoais</strong>
              <p>Idade: 18 anos</p>
              <p>Gênero: Masculino</p>
              <p>Nacionalidade: Brasileiro</p>
              <p>Autodeclaração: Preto</p>
              <p>Estado Civil: Solteiro</p>
              <p>Possui Filhos: Não</p>
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
              <p>LinkedIn: https://www.LinkedIn.com/gabrielsouza</p>
              <p>Instagram:  https://www.Instagran.com/gabrielsouza</p>
              <p>Facebook:  https://www.facebook.com/gabrielsouza</p>
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
              <p>Ingles: Intermediário</p>
              <p>Espanhol: Básico </p>
              <p>Português: FLueênte</p>
          </Langueges>
        </AboutDataContainer>
      </Body>
    </>
  );
}

export default AboutUser;