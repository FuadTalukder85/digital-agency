import React from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Buttonoutline from "../ReusableBtn/Buttonoutline";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between mt-7">
        <div>
          <Image src={logo} alt="logo" width={75}></Image>
        </div>
        <div className="flex gap-5">
          <div>
            <Buttonoutline>Get in touch</Buttonoutline>
          </div>
          <div>
            <button className="p-3 border border-green-900 rounded-full font-semibold text-[#111111]">
              <HiMenuAlt4 />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
