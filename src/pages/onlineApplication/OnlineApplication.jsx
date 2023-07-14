import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import FirstStep from "./components/FirstStep";
import ContainedButton from "../../components/buttons/ContainedButton";
import BachelorsForm from "./forms/BachelorsForm";
import Progressbar from "../../components/Progressbar";

const OnlineApplication = () => {
  useEffect(() => {
    document.title = "Online Application";
  }, []);
  const navigate = useNavigate();
  // const [steps, setSteps] = useState(0);

  // const stepProgress = () => {
  //   if (steps === 0) {
  //     return;
  //   } else if (steps === 1) {
  //     return <BachelorsForm />;
  //   }
  // };
  // console.log(steps);
  return (
    <>
      <div className="bg-primary shadow-lg">
        <NavBar onClick={() => navigate("/")} />
      </div>
      <Progressbar />

      <div className="p-10 w-full h-screen">
        <FirstStep />
        <Footer />
      </div>
    </>
  );
};

export default OnlineApplication;
