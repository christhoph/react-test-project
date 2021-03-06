import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  useAuth,
  LOGIN_ROUTE,
  ROOT_ROUTE,
  ALBUMS_ROUTE,
  PHOTOS_ALBUM_ROUTE,
  POSTS_ROUTE,
  USER_POST_ROUTE,
  TASKS_ROUTE,
  USER_PROFILE_ROUTE,
  AppHeader,
  Footer
} from "./core";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Albums from "./containers/Albums";
import Photos from "./containers/Photos";
import Posts from "./containers/Posts";
import UserPost from "./containers/UserPost";
import Tasks from "./containers/Tasks";
import UserProfile from "./containers/UserProfile";

const Routes = () => {
  const {
    state: { isAuth }
  } = useAuth();

  return (
    <Router>
      {isAuth && <AppHeader />}
      <Switch>
        <Route exact path={LOGIN_ROUTE} component={Login} />
        <Route exact path={ROOT_ROUTE} component={Home} />
        <Route exact path={ALBUMS_ROUTE} component={Albums} />
        <Route path={PHOTOS_ALBUM_ROUTE} component={Photos} />
        <Route exact path={POSTS_ROUTE} component={Posts} />
        <Route path={USER_POST_ROUTE} component={UserPost} />
        <Route exact path={TASKS_ROUTE} component={Tasks} />
        <Route path={USER_PROFILE_ROUTE} component={UserProfile} />
        <Redirect to={ROOT_ROUTE} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
