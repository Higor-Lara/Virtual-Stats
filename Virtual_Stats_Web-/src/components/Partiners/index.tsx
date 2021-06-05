import React from 'react';
import './style.css';
import hospitalIcon from '../../assets/images/hospital_icon.svg';

interface PartinersProps {
  url?: string;
  name: string;
  locale: string;
}

const Partiners: React.FC<PartinersProps> = props => {
  const { url, name, locale } = props;

  return (
    <div className="partiners">
      <div className="img-partiners">
        <img src={url || hospitalIcon} alt="img-partiner" />
      </div>
      <div className="text-partiner">
        <p>Hospital</p>
        <p>{name}</p>
        <p>{locale}</p>
      </div>
    </div>
  );
};

export default Partiners;
