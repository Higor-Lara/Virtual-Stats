import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaClipboard, FaPhoneAlt } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Select from '../../components/Select';
import { FormPatients } from './style';
import api from '../../services/api';
import Loading from '../../components/Loading';
import { StyledLink } from '../HomeAdm/style';
import { useAuth } from '../../hooks/auth';

interface PatientParams {
  cod: string;
  id: string;
}

interface Hospital {
  nome: string;
}

interface Patient {
  RG: string;
  cod: string;
  nome: string;
  sexo: string;
  leito: string;
  hospital: Hospital;
  nascimento: string;
  telefone: string;
  email: string;
}

const FormPatient: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const rgRef = useRef<HTMLInputElement>(null);
  const sexoRef = useRef<HTMLSelectElement>(null);
  const leitoRef = useRef<HTMLInputElement>(null);
  const nascimentoRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const history = useHistory();
  const { adm } = useAuth();

  const [loading, setLoading] = useState(true);
  const params = useParams<PatientParams>();
  const [patient, setPatient] = useState<Patient>();
  const [allPatients, setAllPatients] = useState<Patient[]>([]);

  useEffect(() => {
    async function load(): Promise<void> {
      const response = await api.get('patients');
      setAllPatients(response.data);

      if (params.cod !== 'new' && params.id !== 'new') {
        const resp = await api.get(`patients/${params.cod}`);
        setPatient(resp.data);
      }

      setLoading(false);
    }
    load();
  }, [history, params]);

  async function handlePostSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const data = {
      id_hospital: adm.id_hospital,
      nome: nameRef.current?.value,
      RG: rgRef.current?.value,
      email: emailRef.current?.value,
      leito: leitoRef.current?.value,
      nascimento: nascimentoRef.current?.value,
      sexo: sexoRef.current?.value,
      telefone: telefoneRef.current?.value,
    };
    try {
      await api.post('patients', data);
      alert('Paciente cadastrado com sucesso ');
      history.push('/dashboard');
    } catch (error) {
      let msg = '';
      allPatients.forEach(allPatient => {
        if (data.email === allPatient.email) {
          msg += 'Email ';
        } else if (data.RG === allPatient.RG) {
          msg += 'RG ';
        }
      });
      alert(`${msg} já existe`);
    }
  }
  async function handlePutSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const data = {
      nome: nameRef.current?.value,
      RG: rgRef.current?.value,
      email: emailRef.current?.value,
      leito: leitoRef.current?.value,
      nascimento: nascimentoRef.current?.value,
      sexo: sexoRef.current?.value,
      telefone: telefoneRef.current?.value,
    };
    try {
      await api.put(`patients/${params.id}`, data);
      alert('Paciente editado com sucesso');
      history.push('/dashboard');
    } catch (error) {
      let msg = '';
      allPatients.forEach(allPatient => {
        if (
          data.email === allPatient.email &&
          patient?.cod !== allPatient.cod
        ) {
          msg += 'Email ';
        } else if (
          data.RG === allPatient.RG &&
          patient?.cod !== allPatient.cod
        ) {
          msg += 'RG ';
        }
      });
      alert(`${msg} já existe`);
    }
  }

  return (
    <Layout title="Novo Formulário">
      {loading ? (
        <Loading />
      ) : (
        <FormPatients>
          <form
            className="form-patient"
            onSubmit={params.cod === 'new' ? handlePostSubmit : handlePutSubmit}
          >
            <div className="double-container">
              <div className="informations">
                <div className="icon-informations">
                  <HiOutlineInformationCircle color="#0b74bc" size={25} />
                  <p>Informações</p>
                </div>
                <div className="mini-container">
                  <div className="name">
                    <p>Nome: </p>
                    <input
                      type="text"
                      name="name"
                      defaultValue={patient?.nome}
                      ref={nameRef}
                      required
                    />
                  </div>
                  <div className="born">
                    <p>Nascimento: </p>
                    <input
                      type="date"
                      name="born"
                      defaultValue={patient?.nascimento}
                      ref={nascimentoRef}
                      required
                    />
                  </div>
                  <div className="born">
                    <Select
                      name="sex"
                      label="Sexo:"
                      defaultValue={patient?.sexo}
                      options={[
                        { value: 'M', label: 'Masculino' },
                        { value: 'F', label: 'Feminino' },
                      ]}
                      ref={sexoRef}
                    />
                  </div>
                </div>
              </div>
              <div className="identification">
                <div className="icon-informations">
                  <FaClipboard color="#0b74bc" size={23} />
                  <p>Identificação</p>
                </div>
                <div className="cod-rg">
                  <div className="cod">
                    <p>Código: </p>
                    <input
                      type="text"
                      name="code"
                      defaultValue={patient?.cod}
                      disabled
                    />
                  </div>
                  <div className="rg">
                    <p>RG: </p>
                    <input
                      type="text"
                      name="rg"
                      defaultValue={patient?.RG}
                      ref={rgRef}
                      required
                      maxLength={9}
                      minLength={9}
                    />
                  </div>
                  <div className="leito">
                    <p>Leito: </p>
                    <input
                      type="text"
                      name="leito"
                      defaultValue={patient?.leito}
                      ref={leitoRef}
                      required
                    />
                  </div>
                  <div className="hospital">
                    <p>Hospital: </p>
                    <p className="p-hospital">{adm.hospital.nome}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="double-container-down">
              <div className="comunication">
                <div className="icon-informations">
                  <FaPhoneAlt color="#0b74bc" size={20} />
                  <p>Comunicação</p>
                </div>
                <div className="mini-container-four">
                  <div className="phone">
                    <p>Telefone: </p>
                    <input
                      type="text"
                      name="phone"
                      defaultValue={patient?.telefone}
                      ref={telefoneRef}
                      required
                      maxLength={11}
                      minLength={11}
                    />
                  </div>

                  <div className="email">
                    <p>Email: </p>
                    <input
                      type="email"
                      name="email"
                      defaultValue={patient?.email}
                      ref={emailRef}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="cancel-save">
                <StyledLink to="/dashboard">
                  <button type="button">Cancelar</button>
                </StyledLink>
                <button type="submit">Salvar</button>
              </div>
            </div>
          </form>
        </FormPatients>
      )}
    </Layout>
  );
};

export default FormPatient;
