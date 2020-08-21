import React, { ReactElement } from 'react';
import styled from 'styled-components';

export const Home: React.FC = (): ReactElement => {
  return (
    <Body>
      <p>
        Hi, I'm <Bold>Citlali</Bold>!<br />
        <br />
        I'm a front-end software developer. I design and build robust applications at Capital One to identify bank
        rejections, keeping millions of customers' money safe and accessible. <br />
        <br />I have a bachelor's degree in Mathematics and Computer Science from MIT, and my real love lies in
        complexity theory. I'm also an avid oil painter.
        <br />
        <br /> You can find me on <Link href='https://github.com/citlali-trigos-raczkowski'>Github</Link> and{' '}
        <Link href='https://www.linkedin.com/in/citlali-trigos-raczkowski-305bb7169/'>LinkedIn</Link>.<br />
      </p>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  font-family: 'Inconsolata';
  font-size: 17pt;
  flex-direction: column;
  width: 50%;
  margin: 5% auto;
  text-align: center;
  title {
    padding: 1.5em;
    flex: center;
  }
`;

const Link = styled.a`
  color: rgb(250, 162, 177);
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: hotpink;
  }
`;
const Bold = styled.b`
  color: hotpink;
`;
