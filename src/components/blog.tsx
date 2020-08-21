import React, { ReactElement } from 'react';
import styled from 'styled-components';
// import LoremIpsum from '../Attachments/LoremIpsum'
// import { HashLink as Link } from 'react-router-hash-link';
// import ScrollableAnchor from 'react-scrollable-anchor'
// import { goToTop } from 'react-scrollable-anchor';

export const Blog: React.FC = (): ReactElement => {
  return (
    <ResponsiveDoc>
      <BlogMenu>
        {/* <Link to='#Interests' style={MenuLink}> */}
        <A>All</A>
        {/* </Link> */}
        {/* <Link to='#Projects' style={MenuLink}> */}
        <A>Creative</A>
        {/* </Link> */}
        {/* <Link to='#Articles' style={MenuLink}> */}
        <A>Travel</A>
        {/* </Link> */}
        {/* <Link to='#Resume' style={MenuLink}> */}
        <A>Code</A>
        {/* </Link> */}
      </BlogMenu>
      <Body></Body>
    </ResponsiveDoc>
  );
};

// const MenuLink = {
//   color: '#843838',
// }

const A = styled.p`
  color: '#843838',
  font-family: 'Varela Round', sans-serif;
  font-size: 1.5em;
  padding: 0;
  margin: 0;
  text-decoration: underline ;
  text-decoration-color: #F9F6EF;
  &:hover, &:link, &:visited, &:active {
    text-decoration-color: #F9F6EF;
  }; 
  `;

const ResponsiveDoc = styled.section`
  margin: 2em;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;
const BlogMenu = styled.div`
  font-family: 'Varela Round', sans-serif;
  margin: 2em 0 2em;
  padding: 1em;
  min-width: 11em;
  background: #f9f6ef;
  color: #843838;
  max-height: 200px;
  position: relative;
  border: 10px solid #fcb377;
  outline: 10px solid #fe9ba6;
  @media (min-width: 700px) {
    width: 10em;
    margin-left: 0.5%;
    position: fixed;
    font-size: 1em;
  }
  box-shadow: -0px -0px 50px cornflowerblue;
`;

const Body = styled.div`
  width: 100%;
  margin-left: 0;
  @media (min-width: 700px) {
    margin-left: 12em;
    margin-top: 2em;
  }
`;
