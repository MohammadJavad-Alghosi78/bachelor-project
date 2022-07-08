// * node_modules
import React from "react";
// * styles
import { AboutUsWrapper, PersonWrapper, ContactWrapper } from "./style";

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <PersonWrapper>
        <h3>Alireza Akhlaghifard</h3>
        <h6>Petroleum engineering at Sharif university of technology</h6>
        <ContactWrapper>
          <p>Email: alirezaakhlaghi1998@gmail.com</p>
          <p>Phone: +989224285811</p>
        </ContactWrapper>
      </PersonWrapper>
      <PersonWrapper>
        <h3>Milad Alghosi</h3>
        <h6>Petroleum engineering at Sharif university of technology</h6>
        <ContactWrapper>
          <p>Email: milad.alghosi78@gmail.com</p>
          <p>Phone: +989338633187</p>
        </ContactWrapper>
      </PersonWrapper>
    </AboutUsWrapper>
  );
};

export default AboutUs;
