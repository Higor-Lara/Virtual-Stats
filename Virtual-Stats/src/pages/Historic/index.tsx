import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useHistory, useParams } from 'react-router-dom';
import HistoricPatient from '../../components/HistoricPatient';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import api from '../../services/api';
import { ComponentHistoric } from './style';

interface Hospital {
  nome: string;
}

interface Patient {
  nome: string;
  hospital: Hospital;
}
interface HistoricPatient {
  id: string;
  hora: string;
  estado: string;
  paciente: Patient;
}

interface Params {
  cod: string;
}

const Historic: React.FC = () => {
  const [historicPatient, setHistoricPatient] = useState<HistoricPatient[]>([]);
  const params = useParams<Params>();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`stats-patient/${params.cod}`)
      .then(response => {
        setHistoricPatient(response.data);
      })
      .catch(() => {
        alert('Histórico do usuário não encontrado');
        history.push('/dashboard');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [history, params]);

  const timeFormatted = (hora: string): string => {
    const dateFormatted = parseISO(hora);

    return format(dateFormatted, "dd/MM/yy '-' HH:mm", { locale: ptBR });
  };

  return (
    <Layout title={`Histórico - ${historicPatient[0]?.paciente?.nome || ''}`}>
      {loading ? (
        <Loading />
      ) : (
        <ComponentHistoric>
          <div className="container">
            {historicPatient.map((patient, index) => {
              return (
                <HistoricPatient
                  datehora={timeFormatted(patient.hora)}
                  estado={patient.estado}
                  hospital={patient.paciente.hospital.nome}
                  paramsCod={params.cod}
                  paramsId={patient.id}
                  key={String(index)}
                />
              );
            })}
          </div>
        </ComponentHistoric>
      )}
    </Layout>
  );
};

export default Historic;
