import React from "react";

const Buttonoutline = ({ children }) => {
  return (
    <button className="py-2 px-7 border border-blue-600 rounded-full font-semibold text-[#111111]">
      {children}
    </button>
  );
};

export default Buttonoutline;
