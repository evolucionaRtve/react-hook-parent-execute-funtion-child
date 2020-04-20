import React, { useEffect } from "react";

const Navbar = ({ className, functionPadre }) => {
  const functionHijo = () => {
    console.log("function hijo");
  };
  useEffect(() => {
    functionPadre(functionHijo);
  });
  return (
    <div className={className}>
      <ul className="navbar">
        <li className="navbar__item">
          pepe
        </li>
      </ul>
    </div>
  );
};
export default Navbar;