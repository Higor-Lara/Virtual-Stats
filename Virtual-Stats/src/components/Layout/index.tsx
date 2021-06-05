import React, { useCallback, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import { Container } from './styles';

interface LayoutProps {
  title?: string;
}
const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(!(window.innerWidth < 768));

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(prevState => !prevState);
  }, []);

  return (
    <Container $isOpen={isDrawerOpen}>
      <div id="menu">
        <Sidebar $isOpen={isDrawerOpen} />
      </div>

      <div id="content">
        <div className="icon-list">
          <button type="button" onClick={handleDrawerOpen}>
            <FaBars size={35} color="#0B74BC" />
          </button>
          <p>{title}</p>
        </div>
        <div id="main">{children}</div>
      </div>
    </Container>
  );
};

export default Layout;
