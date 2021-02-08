import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-native';

import { FirstPage, ChartsPage } from '../pages';

const AppPage = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/charts" component={ChartsPage} />
      </Switch>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: 100%;
  height: 1200px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(88, 231, 162, 0.25);
`;

export default AppPage;