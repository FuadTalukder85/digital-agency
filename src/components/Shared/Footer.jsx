import React from "react";
import Container from "../Container";

const Footer = () => {
  return (
    <Container>
      <div className="flex justify-between text-gray-500 mt-48">
        <div>
          <p className="">© 2025 Artistweb Ltd · All rights reserved.</p>
        </div>
        <div>
          <ul className="flex gap-8">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
