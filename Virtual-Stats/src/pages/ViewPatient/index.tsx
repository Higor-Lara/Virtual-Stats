import React, { useEffect, useState } from 'react';
import { format, differenceInYears, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useParams, useHistory } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { AiOutlineHistory, AiOutlineEdit } from 'react-icons/ai';
import { useMemo } from 'react';
import { IoMdClipboard } from 'react-icons/io';
import { InfoPatient } from './style';
import Layout from '../../components/Layout';
import api from '../../services/api';
import Loading from '../../components/Loading';
import { StyledLink } from '../HomeAdm/style';

interface StatusParams {
  cod: string;
}

interface Hospital {
  nome: string;
}

interface Patient {
  id: string;
  cod: string;
  nome: string;
  sexo: string;
  leito: string;
  hospital: Hospital;
  nascimento: string;
}
interface Status {
  id: string;
  hora: string;
  estado: string;
  paciente: Patient;
  medicamento: string;
  alimentacao: string;
  observacao: string;
}

const ViewPatient: React.FC = () => {
  const params = useParams<StatusParams>();
  const [oneStatus, setOneStatus] = useState<Status>({} as Status);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`stats-patient/last/${params.cod}`)
      .then(response => {
        setOneStatus(response.data);
      })
      .catch(() => {
        alert('Usuário não encontrado');
        history.push('/dashboard');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [history, params.cod]);

  const timeFormatted = useMemo(() => {
    const dateFormatted = parseISO(oneStatus.hora);

    return oneStatus.hora
      ? format(dateFormatted, "dd/MM/yy '-' HH:mm", { locale: ptBR })
      : '';
  }, [oneStatus.hora]);

  const age = useMemo(() => {
    if (!oneStatus.paciente?.nascimento) return '';
    const dateFormatted = parseISO(oneStatus.paciente.nascimento);
    return differenceInYears(new Date(), dateFormatted);
  }, [oneStatus.paciente]);

  const sex = useMemo(() => {
    if (!oneStatus.paciente?.sexo) return '';
    let sexPatient = '';
    if (oneStatus.paciente?.sexo === 'M') {
      sexPatient = 'Masculino';
    } else {
      sexPatient = 'Feminino';
    }
    return sexPatient;
  }, [oneStatus.paciente]);

  return (
    <Layout title="Último status do paciente">
      {loading ? (
        <Loading />
      ) : (
        <InfoPatient>
          <div className="patient-and-att">
            <div className="min-container">
              <div className="information-patient">
                <div className="name-patient">
                  <div className="p-nome">
                    <p>{oneStatus.paciente.nome}</p>
                  </div>
                  <div className="logo-edit">
                    <StyledLink
                      to={`/patients/${params.cod}/${oneStatus.paciente.id}`}
                    >
                      <AiOutlineEdit size={30} />
                    </StyledLink>
                  </div>
                </div>
                <div className="datas-and-icon">
                  <div className="datas">
                    <p>Idade: {age} anos</p>
                    <p>Sexo: {sex}</p>
                    <p>Hospital: {oneStatus.paciente.hospital.nome}</p>
                    <p>Leito: {oneStatus.paciente.leito}</p>
                  </div>
                  <FiUser size={120} />
                </div>
              </div>
              <div className="new-edit">
                <div className="text-and-icon-reload">
                  <p>Última atualização: {timeFormatted}</p>
                  <StyledLink to={`/historic/${oneStatus.paciente.cod}`}>
                    <AiOutlineHistory size={35} className="history" />
                  </StyledLink>
                </div>
                <div className="button-edit-view">
                  <StyledLink
                    to={`/status/${oneStatus.paciente.cod}/${oneStatus.id}/edit`}
                  >
                    <button type="button">Editar</button>
                  </StyledLink>
                  <StyledLink to={`/status/${oneStatus.paciente.cod}/new/edit`}>
                    <button type="button">Novo</button>
                  </StyledLink>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                navigator.clipboard.writeText(oneStatus.paciente.cod)}
              className="button-copiar"
            >
              <IoMdClipboard size={25} /> <p>Copiar código</p>
            </button>
            <div className="dates-patient">
              <div className="all-text-dates-patient">
                <p>Estado:</p>
                <p>{oneStatus.estado}</p>
              </div>
              <div className="all-text-dates-patient">
                <p>Medicação:</p>
                <p>{oneStatus.medicamento}</p>
              </div>
              <div className="all-text-dates-patient">
                <p>Alimentação:</p>
                <p>{oneStatus.alimentacao}</p>
              </div>
              <div className="all-text-dates-patient">
                <p>Observação:</p>
                <p>{oneStatus.observacao}</p>
              </div>
            </div>
          </div>
        </InfoPatient>
      )}
    </Layout>
  );
};

export default ViewPatient;
