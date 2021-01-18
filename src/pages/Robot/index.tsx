import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { RobotStyle, RobotAreaContent, RobotContainer } from './styles';

import TopNavigatorRobotPage from '../../components/TopNavigatorRobotPage';
import api from '../../services/api';
import { FaLessThanEqual } from 'react-icons/fa';

interface Marker {
  value: number;
  label: string;
}

interface AlternativesDTO {
  id: number;
  tipo: string;
  pergunta: string;
}

interface Result {
  tipo: string;
  resultado: string;
}

const Robot: React.FC = () => {
  const [questions, setQuestions] = useState<AlternativesDTO[]>([]);
  const [answers, setAnswers] = useState< number | number[]>();
  const [nextQuestion, setNextQuestion] = useState<number>(1);
  const [userResult, setUserResult] = useState<number>(69);
  const [result, setResult] = useState<Result[]>([])
  const [showResult, setshowResult] = useState<Boolean>(true)
  const [mark, setMarks] = useState<Marker[]>([
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },{
      value: 5,
      label: '5',
    },
  ]);

  function valuetext(value: number) {
    return `${value}`;
  };

  useEffect(() => {
    async function handleAlternatives() {
      const response = await api.get('/pergunta-boot/consultar')

      setQuestions(response.data);
    }

    handleAlternatives();
  },[]);

  useEffect(() => {
    async function handleResultBot() {
      const response = await api.get(`/pessoa/resultado-teste-vocacional/${userResult}`);

      setResult(response.data);
    }

    handleResultBot();
  },[]);

  function handleGetAnswers(event: React.ChangeEvent<{}>, value: number | number[]){
    setAnswers(value);
  }

  function handleNextQuestion(){
    if(nextQuestion < 73) {
      setNextQuestion(nextQuestion + 1);
    }else {
      setshowResult(false);
    } 
  }

  return (
    <>
      <RobotStyle>
        <TopNavigatorRobotPage />
          <RobotContainer>
            <RobotAreaContent>
              <div className="title">
                <strong>Qual a probabilidade de:</strong>
              </div>
              <div className='RobotContent'>
                <div className='RenderQuestions'>
                <Typography id="discrete-slider-always" gutterBottom>
                  
                  {questions.find(question => question.id === nextQuestion)?.pergunta}

                </Typography>
                </div>
              <Slider
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="aria-valuetext"
                step={1}
                marks={mark}
                valueLabelDisplay="off"
                max={5}
                min={1}
                onChange={handleGetAnswers}
                />

              <div>
                <button type="submit" onClick={handleNextQuestion}>
                  Proximo
                </button>
              </div>
                
              {!showResult ? (
                <div className="resultTest">
                  <strong>Você tirou a área F. Artística</strong>
                  <p>
                    Os cursos e as profissões que combinam com você são: 
                    <br/>
                    - Arquitetura
                    <br/>
                    - Artes plásticas
                    <br/>
                    - Design
                    <br/>
                    - Cenografia
                    <br/>
                    - Dança
                    <br/>
                    - Design de interiores
                    <br/>
                    - moda
                    <br/>
                    - Programação visual
                    <br/>
                    - Fotografia
                    <br/>
                    - Odontológia
                    <br/>
                    - modelo
                  </p>
                </div>
              ):(
                ""
              )}
                
            </div>
          </RobotAreaContent>
        </RobotContainer>
      </RobotStyle>
    </>
  );
}

export default Robot;


// aria-label
//aria-labelledby
//aria-valuetext