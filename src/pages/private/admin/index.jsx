import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Wrapper } from '../components/Wrapper';
import { Header } from '../components/Header';
import BarChart from './pages/BarChart';
import Home from './pages/Home';
import LineChart from './pages/LineChart';
import PieChart from './pages/PieChart';
import Employee from './pages/Employee';
const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [linkfor, setLinkFor] = useState('admin');

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsOpen(!isOpen);
  };
  const [selectedLink, setSelectedLink] = useState(0);
  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  const handleChange = (index) => {
    setLinkFor(index ? 'register' : 'setup' ? 'admin' : 'ched');
  };

  const Link = (
    <>
      {selectedLink === 0 && <Home />}
      {selectedLink === 1 && <Employee />}
      {selectedLink === 2 && <BarChart />}
      {selectedLink === 3 && <LineChart />}
      {selectedLink === 4 && <PieChart />}
    </>
  );

  return (
    <>
      <div className="flex w-full h-screen">
        <Sidebar
          handleLinkClick={handleLinkClick}
          handleToggleExpand={handleToggleExpand}
          isExpanded={isExpanded}
          isOpen={isOpen}
          linkfor={linkfor}
        />
        <div className="flex-grow ">
          <Header isExpanded={isExpanded}>
            Admin
            <span className="underlined underline-clip"> Dashboard</span>
          </Header>
          <Wrapper isExpanded={isExpanded}>{Link}</Wrapper>
        </div>
      </div>
    </>
  );
};

export default Admin;
