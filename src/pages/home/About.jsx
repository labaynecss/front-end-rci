import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <section id="about" className="h-screen w-full  mt-[6rem]">
      <div className="bg-red-200 rounded-md mx-auto h-[600px] w-[80rem]">
        <div className="pt-[8rem] flex flex-col items-center">
          <h1 className=" text-4xl pb-10 ">Be a part of the Movement</h1>
          <h3 className="texy-sm pb-5 ">
            We are bringing sight to millions of Canadians with uncorrect poor
            vision{" "}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;
