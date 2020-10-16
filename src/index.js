/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
// pages
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import MyProjectsPage from "views/examples/MyProjectsPage.js";
import TravelPage from "views/examples/TravelPage.js";
import BlogPage from "views/examples/BlogPage.js";
// others<Route
      //   path="/nucleo-icons"
      //   render={(props) => <NucleoIcons {...props} />}
      // />

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/myprojects-page"
        render={(props) => <MyProjectsPage {...props} />}
      />
      <Route
        path="/travel-page"
        render={(props) => <TravelPage {...props} />}
      />
      <Route
        path="/blog-page"
        render={(props) => <BlogPage {...props} />}
      />      
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
