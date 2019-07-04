import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav/Nav';
import css from './App.module.css';

const AcyncHome = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const AcyncPet = lazy(() =>
  import('../pages/PetPage/PetPage' /* webpackChunkName: "pet-page" */),
);
const AcyncPets = lazy(() =>
  import('../pages/PetsPage/PetsPage' /* webpackChunkName: "pets-page" */),
);
const AcyncAbout = lazy(() =>
  import('../pages/AboutPage/AboutPage' /* webpackChunkName: "about-page" */),
);

const App = () => (
  <div className={css.containerStyle}>
    <Nav />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={AcyncHome} />
        <Route path="/pets/:id" component={AcyncPet} />
        <Route path="/pets" component={AcyncPets} />
        <Route path="/about" component={AcyncAbout} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;
