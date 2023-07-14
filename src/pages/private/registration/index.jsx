import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { Wrapper } from "../components/Wrapper";
import { Header } from "../components/Header";
import EnrollmentQueue from "./EnrollmentQueue";

import Subject from "./pages/Subject";

const Registar = () => {
  useEffect(() => {
    document.title = "Registrar";
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [linkfor, setLinkFor] = useState("register");

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsOpen(!isOpen);
  };
  const [selectedLink, setSelectedLink] = useState(0);
  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  const handleChange = (index) => {
    setLinkFor(index ? "register" : "admin");
  };

  const content = (
    <>
      {selectedLink === 1 && <EnrollmentQueue />}
      {selectedLink === 2 && <Subject />}
    </>
  );
  return (
    <div className="flex w-full h-screen">
      <Sidebar
        handleLinkClick={handleLinkClick}
        handleToggleExpand={handleToggleExpand}
        isExpanded={isExpanded}
        isOpen={isOpen}
        linkfor={linkfor}
      />
      <div className=" flex-col flex-grow ">
        <Header isExpanded={isExpanded}>
          {" "}
          Registration{" "}
          <span className="underlined underline-clip"> Dashboard</span>
        </Header>
        <Wrapper isExpanded={isExpanded}>{content}</Wrapper>
      </div>
    </div>
  );
};

export default Registar;
