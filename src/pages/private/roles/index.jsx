import React, { useEffect } from "react";
import RolesSkeleton from "../components/RolesSkeleton";
import { AnimatePresence } from "framer-motion";
import heroBg from "../../../assets/images/admin.png";
import { getroles } from "../../api/rolesAdmin";
import { useQuery } from "@tanstack/react-query";
import { LeftComponent } from "./Left";
import { RightComponent } from "./Right";
import useLoginCredZustand from "../../../store/useLoginCredZustand";

const Roles = () => {
  useEffect(() => {
    document.title = "Roles";
  }, []);
  const { data, isLoading, isError, error } = useQuery(["roles"], getroles);
  const { isAuthenticated } = useLoginCredZustand();

  useEffect(() => {
    console.log(data);

    console.log("isAuthenticated", isAuthenticated);
  }, [data]);

  if (isLoading) {
    return <RolesSkeleton />;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <div className=" w-full ">
        <div className="w-full h-full top-0 object-fit z-[-1] opacity-10 absolute">
          <img src={heroBg} alt="" className="w-full h-screen object-fit" />
        </div>
        <div className="absolute top-0 w-full h-full bg-primary mix-blend-overlay z-[-1]"></div>
        <div className="grid h-screen place-items-center ">
          <div className="container md:ml-10">
            <div className="flex justify-center">
              <LeftComponent className="invisible sm:visible md:visible lg:visible" />
              <AnimatePresence mode="wait">
                <RightComponent data={data} key={data} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;
