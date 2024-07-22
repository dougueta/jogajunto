import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
// TODO:Estudar transições de css para fazer entre as navegações

import Home from 'pages/Home';
import Players from 'pages/Players';
import PageBase from 'components/Pagebase';
import Raffle from 'src/pages/Raffle';
import routes from '../routes';
const doug = 'teste';
const teste = 'poiesgit'
const App = () => {
  return (
    <BrowserRouter>
      <PageBase>
        <Routes>
          <Route path={routes.home} Component={Home} />
          <Route path={routes.players} Component={Players} />
          <Route path={routes.raffle} Component={Raffle} />
        </Routes>
      </PageBase>
    </BrowserRouter>
  );
};
export default App;
