import React from 'react';
import { FiUser } from 'react-icons/fi';
import { SinglePatients } from './style';

interface SinglePatientProps {
  name: string;
  datahora: string;
}

const SinglePatient: React.FC<SinglePatientProps> = props => {
  return (
    <SinglePatients>
      <div className="patient-name-date">
        <p>{props.name}</p>
        <p>Última atualização:</p>
        <p>{props.datahora}</p>
      </div>
      <div className="icon-patient">
        <FiUser size={70} />
      </div>
    </SinglePatients>
  );
};

export default SinglePatient;
