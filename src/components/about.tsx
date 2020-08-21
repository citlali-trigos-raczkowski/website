import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import GradPhoto from '../attachments/GradPhoto.jpg';
import { LoremIpsum } from '../attachments/LoremIpsum';

export const About: FC<{ path: string }> = (): ReactElement => {
  return (
    <Document>
      <Content>
        <img src={GradPhoto} style={PicStyles} alt='MIT Graduation June 2019' />
        <Title>Welcome to the website!</Title>
        <Meat>
          <LoremIpsum />
        </Meat>
      </Content>
    </Document>
  );
};

export default About;

const PicStyles = {
  width: '100%',
  height: 'auto',
  maxWidth: '100%',
  maxHeight: '100%'
};

const Document = styled.section`
  width: 100%;
  text-align: center;
`;

const Content = styled.div`
  display: inline-block;
  @media (min-width: 700px) {
    width: 60%;
    margin: 2em;
  }
  @media (max-width: 900px) {
    width: 80%;
    margin: 2em;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin: 2em 0 2em 0;
  }
  background: #f9f6ef;
  border: 10px solid #fd6f64;
  outline: 10px solid #fe9ba6;
  box-shadow: -0px -0px 50px cornflowerblue;
  color: black;
`;
const Title = styled.h2`
  text-align: center;
  text-size: 12px;
  margin: 1em;
  font-family: 'Varela Round', sans-serif;
`;
const Meat = styled.h2`
  font-size: 18px;
  margin: 0 2em 2em 2em;
  text-align: left;
  font-family: 'Poppins', sans-serif;
`;
