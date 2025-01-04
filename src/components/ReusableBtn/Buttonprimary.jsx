import React from "react";

const Buttonprimary = ({ children }) => {
  return (
    <button className="py-5 px-10 text-xl bg-blue-600 rounded-full font-semibold text-white">
      {children}
    </button>
  );
};

export default Buttonprimary;
