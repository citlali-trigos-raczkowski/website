import React, { ReactElement } from 'react';
// import { LoremIpsum } from '../attachments/LoremIpsum';
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Articles } from './work/articles';
import { Interests } from './work/interests';
import { Resume } from './work/resume';
import './work.scss';
import styled from 'styled-components';

export const Description = styled.div`
  width: 50vw;
  min-height: 500px;
  min-height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0; 
  color: white;
  font-family: 'Sacramento', cursive;
  font-size: 40pt;
  text-align: center;
  vertical-align: middle;
  line-height: 100vh;
  border-style:dotted;
  border-color: #fcb377; 
  border-width:20px;  
}`;

const Content = styled.div`
  width: 50vw;
  min-height: 500px;
  min-height: 100vh;
  background-color: white;
`;
const DescBlue = styled(Description)`
  background-color: cornflowerblue;
`;
const DescBrown = styled(Description)`
  background-color: #843838;
`;
const DescOrange = styled(Description)`
  background-color: #fd6f64;
  border-color: cornfowerblue;
`;
const DescPink = styled(Description)`
  background-color: #fe9ba6;
`;
const ContLeft = styled(Content)`
  float: left;
`;
const ContRight = styled(Content)`
  float: right;
`;

export const Work: React.FC = (): ReactElement => {
  return (
    <div className='stickyscroll'>
      <div className='subsection'>
        <ContLeft>{Interests}</ContLeft>
        <DescBlue>Interests</DescBlue>
      </div>

      <div className='subsection'>
        <DescBrown>Projects</DescBrown>
        <ContRight></ContRight>
      </div>

      <div className='subsection'>
        <ContLeft>{Articles}</ContLeft>
        <DescOrange>Articles</DescOrange>
      </div>

      <div className='subsection'>
        <DescPink>
          <span>Resume</span>
        </DescPink>
        <ContRight>hi {Resume}</ContRight>
      </div>
    </div>
  );
};
