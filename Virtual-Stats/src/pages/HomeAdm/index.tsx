import React, { useEffect, useRef, useState } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { HiPlus, HiOutlineSearch } from 'react-icons/hi';
import { ListPatients, StyledLink, StyledLinks } from './style';
import SinglePatient from '../../components/SinglePatient';
import Layout from '../../components/Layout';
import api from '../../services/api';
import Loading from '../../components/Loading';
import { useAuth } from '../../hooks/auth';

interface Patient {
  nome: string;
  cod: string;
  id: string;
  RG: string;
}
interface Status {
  hora: string;
  paciente: Patient;
}

const HomeAdm: React.FC = () => {
  const [patients, setPatients] = useState<Status[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Status[]>([]);
  const [loading, setLoading] = useState(true);

  const searchTermsRef = useRef<HTMLInputElement>(null);
  const { adm } = useAuth();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const { data: patientsList } = await api.get(
        `patients/hospital/${adm.id_hospital}`,
      );
      const patientsData = await Promise.all(
        patientsList.map(async (patient: Patient) => {
          const { data } = await api.get(`stats-patient/last/${patient.cod}`);

          return data;
        }),
      );

      setPatients(patientsData as Status[]);
      setFilteredPatients(patientsData as Status[]);
      setLoading(false);
    }

    loadData();
  }, [adm.id_hospital]);

  const handleSearch = (): void => {
    const searchTerms = searchTermsRef.current?.value.trim().toLowerCase();

    if (!searchTerms) {
      setFilteredPatients(patients);
      return;
    }

    const filtered = patients.filter(patient => {
      let match = false;
      const props = [
        patient.paciente.RG,
        patient.paciente.nome,
        patient.paciente.cod,
      ];

      props.forEach(prop => {
        if (prop.trim().toLowerCase().indexOf(searchTerms) >= 0) match = true;
      });

      return match;
    });

    setFilteredPatients(filtered);
  };

  const timeFormatted = (hora: string): string => {
    const dateFormatted = parseISO(hora);

    return format(dateFormatted, "dd/MM/yy '-' HH:mm", { locale: ptBR });
  };

  return (
    <Layout title="Lista de pacientes">
      {loading ? (
        <Loading />
      ) : (
        <ListPatients>
          <div className="patients-button">
            <div className="controls">
              <StyledLinks to="patients/new/new">
                <HiPlus size={30} className="mais" />
                Adicionar
              </StyledLinks>
              <div id="searchbar">
                <button type="button" onClick={handleSearch}>
                  <HiOutlineSearch />
                </button>
                <input
                  ref={searchTermsRef}
                  type="text"
                  placeholder="Pesquisa"
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
              </div>
            </div>
            <div className="patients">
              {filteredPatients.map(patient => {
                return (
                  <StyledLink
                    to={`status/${patient.paciente.cod}`}
                    key={patient.paciente.cod}
                  >
                    <SinglePatient
                      name={patient.paciente.nome}
                      datahora={timeFormatted(patient.hora)}
                    />
                  </StyledLink>
                );
              })}
            </div>
          </div>
        </ListPatients>
      )}
    </Layout>
  );
};

export default HomeAdm;
