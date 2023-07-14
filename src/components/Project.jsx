import React from 'react';

export const Project = () => {
  return (
    <>
      <section id="project">
        <div className="h-screen ">
          <div className="container mx-auto  ">
            <h1 className=" px-1 py-4 uppercase text-xl tracking-widest text-[#6699CC]">
              Projects
            </h1>
            <h1 className="text-left text-primary mb-4 ">Recent Works </h1>
            <div className="items-center flex flex-row justify-center">
              <div className="h-[500px] w-[550px] rounded-lg p-5 bg-red-200">
                sample 1
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
