import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { format, differenceInYears, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FiUser } from 'react-icons/fi';
import { Link, useHistory, useParams } from 'react-router-dom';
import { EditPatients } from './style';
import Layout from '../../components/Layout';

import api from '../../services/api';
import Loading from '../../components/Loading';

interface StatusParams {
  cod: string;
  id: string;
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
  id?: string;
  hora: string;
  estado?: string;
  paciente: Patient;
  medicamento?: string;
  alimentacao?: string;
  observacao?: string;
}

const Status: React.FC = () => {
  const estadoRef = useRef<HTMLInputElement>(null);
  const medicacaoRef = useRef<HTMLInputElement>(null);
  const alimentacaoRef = useRef<HTMLInputElement>(null);
  const obsRef = useRef<HTMLTextAreaElement>(null);

  const params = useParams<StatusParams>();
  const [editOneStatus, setEditOneStatus] = useState<Status>({} as Status);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(true);

  useEffect(() => {
    if (params.id === 'new') {
      setIsUpdating(false);
    }
    if (params.id === 'new') {
      api
        .get(`patients/${params.cod}`)
        .then(response => {
          setEditOneStatus({
            paciente: response.data,
            hora: '2020-11-04T15:43:00.000Z',
          });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      api
        .get(`stats/${params.cod}/${params.id}`)
        .then(response => {
          setEditOneStatus(response.data);
        })
        .catch(() => {
          alert('Usuário não encontrado');
          history.push('/dashboard');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [history, isUpdating, params.cod, params.id]);

  const timeFormatted = useMemo(() => {
    const dateFormatted = parseISO(editOneStatus.hora);

    return editOneStatus.hora
      ? format(dateFormatted, "dd/MM/yy '-' HH:mm", { locale: ptBR })
      : '';
  }, [editOneStatus.hora]);

  const age = useMemo(() => {
    if (!editOneStatus.paciente?.nascimento) return '';
    const dateFormatted = parseISO(editOneStatus.paciente.nascimento);
    return differenceInYears(new Date(), dateFormatted);
  }, [editOneStatus.paciente]);

  const sex = useMemo(() => {
    if (!editOneStatus.paciente?.sexo) return '';
    let sexPatient = '';
    if (editOneStatus.paciente?.sexo === 'M') {
      sexPatient = 'Masculino';
    } else {
      sexPatient = 'Feminino';
    }
    return sexPatient;
  }, [editOneStatus.paciente]);

  async function handlePostSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    try {
      const data = {
        id_paciente: editOneStatus.paciente.id,
        estado: estadoRef.current?.value,
        medicamento: medicacaoRef.current?.value,
        alimentacao: alimentacaoRef.current?.value,
        observacao: obsRef.current?.value,
      };
      await api.post(`stats/${editOneStatus.paciente.id}`, data);
      alert('Status criado com sucesso');
      history.push('/dashboard');
    } catch (error) {
      alert('Erro ao criar');
    }
  }

  async function handlePutSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    try {
      const data = {
        estado: estadoRef.current?.value,
        medicamento: medicacaoRef.current?.value,
        alimentacao: alimentacaoRef.current?.value,
        observacao: obsRef.current?.value,
      };
      await api.put(`stats/${editOneStatus.id}`, data);
      alert('Status editado com sucesso');
      history.push('/dashboard');
    } catch (error) {
      alert('Erro ao atualizar');
    }
  }

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <EditPatients>
          <form
            className="patient-and-att"
            onSubmit={params.id === 'new' ? handlePostSubmit : handlePutSubmit}
          >
            <div className="min-container">
              <div className="information-patient">
                <div className="name-patient">
                  <div className="p-nome">
                    <p>{editOneStatus.paciente?.nome}</p>
                  </div>
                </div>
                <div className="datas-and-icon">
                  <div className="datas">
                    <p>Idade: {age} anos</p>
                    <p>Sexo: {sex}</p>
                    <p>Hospital: {editOneStatus.paciente?.hospital?.nome}</p>
                    <p>Leito: {editOneStatus.paciente?.leito}</p>
                  </div>
                  <FiUser size={120} />
                </div>
              </div>
              <div className="new-edit">
                <div className="text-and-icon-reload">
                  {isUpdating && (
                    <>
                      <p>Última atualização:</p> <p>{timeFormatted}</p>
                    </>
                  )}
                </div>
                <div className="button-edit-view">
                  <Link to="/dashboard">
                    <button type="button">Cancelar</button>
                  </Link>
                  <button type="submit">Salvar</button>
                </div>
              </div>
            </div>

            <div className="dates-patient">
              <div className="all-text-dates-patient">
                <p>Estado:</p>
                <input
                  type="text"
                  name="medication"
                  className="input-medication-and-food-tree"
                  defaultValue={editOneStatus?.estado}
                  ref={estadoRef}
                  required
                />
              </div>
              <div className="all-text-dates-patient">
                <p>Medicação:</p>
                <input
                  type="text"
                  name="medication"
                  className="input-medication-and-food"
                  defaultValue={editOneStatus?.medicamento}
                  ref={medicacaoRef}
                  required
                />
              </div>
              <div className="all-text-dates-patient">
                <p>Alimentação:</p>
                <input
                  type="text"
                  name="food"
                  className="input-medication-and-food-two"
                  defaultValue={editOneStatus?.alimentacao}
                  ref={alimentacaoRef}
                  required
                />
              </div>
              <div className="all-text-dates-patient-two">
                <p>Observação:</p>
                <textarea
                  name="obs"
                  id="textarea-patient"
                  defaultValue={editOneStatus?.observacao}
                  ref={obsRef}
                  required
                />
              </div>
            </div>
          </form>
        </EditPatients>
      )}
    </Layout>
  );
};

export default Status;
