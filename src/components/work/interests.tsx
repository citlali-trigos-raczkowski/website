import React from 'react';
import '../work.scss';
import styled from 'styled-components';

const Text = styled.h1`
  color: black;
  font-family: 'Inconsolata';
  text-size: 18pt;
  display: inline-text;
  vertical-align: middle;
`;
const Title = styled(Text)`
  background-color: lightyellow;
  font-size: 25pt;
`;

export const Interests = (
  <div className='content'>
    <Text>
      <Title>Computer Science</Title>
      <span>My real interest lies at the intersection of</span>
      <Title>Art</Title>
      <span></span>
    </Text>
  </div>
);
