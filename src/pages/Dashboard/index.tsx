import React, { useState, useEffect }  from 'react';

import api from '../../services/api';
import { DashboardContent, DashboardContainerCard, Card } from './styles';

interface NewsDTO {
  id: number;
  titulo: string;
  descricao: string;
  dataExpiracao: Date;
  nome: string;
  ocupacao: string;
}

const Dashboard: React.FC = () => {
  const [news, setNews] = useState<NewsDTO[]>([])

  useEffect(() => {
    async function handleNews() {
      const response = await api.get('/noticia/consultar')

      setNews(response.data)
    }

    handleNews();
  }, []);

  return (
    <>
      <DashboardContent>
        <DashboardContainerCard>
          {news.map((e) => (
            <Card>
              <div className="CardContent">
                <div className="header">
                  <strong>{e.titulo}</strong>
                  <p>{e.dataExpiracao}</p>
                </div>
                <div className="descript">
                  <p>{e.nome}</p>
                  <p>-</p>
                  <p>{e.ocupacao}</p>
                </div>
                <div className="text">
                  <p>{e.descricao}</p>
                </div>
              </div>
            </Card>
          ))}
        </DashboardContainerCard>
      </DashboardContent>
    </>
  );
};

export default Dashboard;

// listar vagas
// apenas vagas apenas com login
// button login 

