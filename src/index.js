/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import StudentDash from "UIs/StudentDash";
import StudentLogin from "UIs/StudentLogin";
import AddComplaint from "UIs/AddComplaint";
import ComplaintDetail from "UIs/ComplaintDetail";
import DepartmentDash from "UIs/DepartmentDash";
import AdminDash from "UIs/AdminDash";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/student"
        render={(props) => <StudentDash {...props} />}
      />
      <Route
        path="/dept"
        render={(props) => <DepartmentDash {...props} />}
      />
      <Route
        path="/admin"
        render={(props) => <AdminDash {...props} />}
      />
      <Route
        path="/addcomplaint"
        render={(props) => <AddComplaint {...props} />}
      />
      <Route
        path="/complaintdetail"
        render={(props) => <ComplaintDetail {...props} />}
      />
      <Route
        path="/stud-login"
        render={(props) => <StudentLogin {...props} />}
      />
      <Route
        path="/admin-login"
        render={(props) => <StudentLogin {...props} />}
      />
      <Redirect to="/stud-login" />
    </Switch>
  </BrowserRouter>
);
