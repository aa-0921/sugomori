import * as React from 'react';
import { Home } from '../pages/Home';
import { Pickup } from '../pages/Pickup';
import { ZeitSample } from '../pages/zeit-sample';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { About } from '../pages/About';
import { PostsApp } from '../pages/PostsApp';
import ProfilePage from '../pages/ProfilePage';
import { MemberListApp } from '../pages/MemberListApp';

import User from './User';

// import './tailwind.css';

export const HomePage = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('isLoggedIn(HomePage.tsx):', User.isLoggedIn());
  }
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={PostsApp} />
        <Route exact path="/pickup" component={Pickup} />
        <Route exact path="/zeit-sample" component={ZeitSample} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profilepage/:id" component={ProfilePage} />
        <Route exact path="/MemberListApp" component={MemberListApp} />

        <Route exact path="/postsApp" component={PostsApp} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
