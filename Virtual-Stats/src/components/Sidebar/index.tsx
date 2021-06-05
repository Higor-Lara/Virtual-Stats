import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logoFullWhite from '../../assets/images/logoFullWhite.png';
import miniLogoWhite from '../../assets/images/mini-logo-white.svg';
import { Sidebars } from './style';
import { useAuth } from '../../hooks/auth';

interface SidebarProps {
  $isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ $isOpen }) => {
  const { signOut, adm } = useAuth();

  const handleLogout = (): void => {
    signOut();
  };

  return (
    <Sidebars $isOpen={$isOpen}>
      <img src={$isOpen ? logoFullWhite : miniLogoWhite} alt="logoBranca" />
      <div className="perfil">
        <FaUserCircle />
        <p>{adm.nome}</p>
      </div>

      <div className="list">
        <div className="barra" />
        <div className="patients">
          <Link to="/dashboard">
            <BsPeopleFill />
            <span>Pacientes</span>
          </Link>
        </div>
        <div className="barra-two" />
      </div>
      <div className="item">
        <button className="out" type="button" onClick={handleLogout}>
          <BiLogOut />
          <span>Sair</span>
        </button>
      </div>
    </Sidebars>
  );
};

export default Sidebar;
