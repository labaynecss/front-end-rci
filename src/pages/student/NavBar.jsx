import react, { useState } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div className=" flex gap-5 rounded-xl justify-center text-xl font-bold text-center">
        <button onClick={handleClick}>Toggle Content</button>
        {isVisible && <p>This content is visible!</p>}
      </div>
    </div>
  );
};

export default NavBar;
