import React, { FC, ReactElement } from 'react';
import { Alert } from 'reactstrap';
import styled from 'styled-components';

const Link = styled.a`
  color: rgb(250, 162, 177);
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: hotpink;
  }
`;

export const NotFoundView: FC<{ default: boolean }> = (): ReactElement => (
  <Alert variant='danger'>
    <h4 className='alert-heading'>
      Uh oh, that page could not be found.
      <span role='img' aria-label='Crying-cat'>
        😿
      </span>
    </h4>
    <p>
      But if you would like to start at the home page, <Link href='/'> click here</Link>.
    </p>
  </Alert>
);
