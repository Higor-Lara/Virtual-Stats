/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { StyledLink } from '../../pages/HomeAdm/style';
import { ComponentHistoricPatient } from './style';

interface HistoricPatientsProps {
  datehora: string;
  estado: string;
  hospital: string;
  paramsCod: string;
  paramsId: string;
}
const HistoricPatient: React.FC<HistoricPatientsProps> = props => {
  return (
    <ComponentHistoricPatient>
      <div className="dates">
        <div>
          <p className="horas">{props.datehora}</p>
        </div>
        <div>
          <p>Estado:</p>
          <p>{props.estado}</p>
        </div>
        <div>
          <p>Hospital:</p>
          <p>{props.hospital}</p>
        </div>
      </div>
      <StyledLink to={`/status/${props.paramsCod}/${props.paramsId}/edit`}>
        <AiOutlineEdit size={30} className="edit" />
      </StyledLink>
    </ComponentHistoricPatient>
  );
};

export default HistoricPatient;
