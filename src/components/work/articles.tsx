import React from 'react';
import '../work.scss';
import styled from 'styled-components';

const Link = styled.a`
  color: #fd6f64;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: hotpink;
    background-color: lightyellow;
  }
`;
export const Articles = (
  <div className='content'>
    <b>On my work at the Directorate of Science, Technology, and Innovation in Freetown, Sierra Leone in 2019.</b>
    <br />
    <br />
    <span role='img' aria-label='star'>
      ✨
    </span>
    <Link
      target='_blank'
      href='https://www.dsti.gov.sl/sierra-leone-designs-online-portal-to-take-long-wait-out-of-teacher-recruitment/'>
      DSTI - Sierra Leone designs online portal to take long wait out of teacher recruitment
    </Link>{' '}
    <br />
    <br />
    <span role='img' aria-label='star'>
      ✨
    </span>
    <Link
      target='_blank'
      href='http://www.thepatrioticvanguard.com/sierra-leone-designs-online-portal-to-take-long-wait-out-of-teacher-recruitment'>
      Patriotic Vanguard - Sierra Leone's News Portal
    </Link>
    <br />
    <br />
    <br />
    <b>Talk on research at MIT and mini-python courses in Cape Town and Johannesburg, South Africa. 2018.</b> <br />
    <br />
    <span role='img' aria-label='star'>
      ✨
    </span>
    <Link target='_blank' href='https://www.stithian.com/news/entry/mit-students-visit-school-to-share-their-research'>
      St Stithian College - MIT Students visit school to share their research
    </Link>
    <br />
    <br />
    <br />
    <b> Original Paper Submitted in Journal of Paleolimnology Volume 61. Published September 2018.</b>
    <br />
    <br />
    <span role='img' aria-label='star'>
      ✨
    </span>
    <Link
      target='_blank'
      href='https://www.researchgate.net/publication/327845384_A_Great_Basin_lake-level_response_to_38-34_ka_Dansgaard-Oeschger_oscillations'>
      A Great Basin lake-level response to 38–34 ka Dansgaard–Oeschger oscillations
    </Link>
    <br />
  </div>
);
