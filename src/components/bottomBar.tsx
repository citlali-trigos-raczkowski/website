import React, { Component } from 'react';
import styled from 'styled-components';
import { Github, Linkedin } from '@styled-icons/feather';
import { version } from '../app.config';
const IconColor = 'white';
const IconHeight = '1.5em';

const Git = styled(Github)`
  color: ${IconColor};
  height: ${IconHeight};
  margin: 1em 1em 1em 0;
  &:hover {
    color: #fcb377;
  }
`;
const LinkedIn = styled(Linkedin)`
  color: ${IconColor};
  height: ${IconHeight};
  &:hover {
    color: #fcb377;
  }
`;

export default class BottomBar extends Component {
  render() {
    return (
      <Footer>
        <Content>
          CITLALI IS A SOFTWARE ENGINEER BASED IN SF.
          <br />
          <a href='https://github.com/citlali-trigos-raczkowski/' target='_blank' rel='noopener noreferrer'>
            <Git />
          </a>
          <a href='https://www.linkedin.com/in/citlali-trigos-raczkowski-305bb7169/'>
            <LinkedIn />
          </a>
          <br />
          <span id='version'>LAST UPDATED: MAY 2020. VERSION: {version}</span>
        </Content>
      </Footer>
    );
  }
}

const Footer = styled.div`
  font-family: 'Inconsolata', monospace;
  background: black;
  color: white;
  width: 100%;
  justify-content: center;
  margin: 0;
`;
const Content = styled.div`
  padding: 3em;
  margin-left: 2em;
`;
