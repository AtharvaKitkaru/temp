import React, { Component } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import AssignmentList from "../assignmentsList/AssignmentList";
import AssignmentDetails from "../assignmentDetails/AssignmentDetails";
import Grades from "../grades/Grades";
import Notifications from "../notifications/Notifications";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "rgb(183, 32, 46)",
    "0.5": "#ffcccb",
    "0.75": "white",
    "1.0": "white",
  },
  shadowBlur: 5,
});

class Container extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: !this.state.loading }), 8000);
  }
  render() {
    return (
      <div id="app-container">
        {document.addEventListener("contextmenu", (event) =>
          event.preventDefault()
        )}
        {this.state.loading && <TopBarProgress />}
        <Header />
        <div style={{ margin: "6em" }}></div>
        <Switch>
          <Route path="/assignments" component={AssignmentList} />
          <Route path="/assignment/:id" component={AssignmentDetails} />
          <Route path="/grades" component={Grades} />
          <Route path="/logout" render={() => alert("Signed out")} />
          <Route path="/notifications">
            <div
              id="notifications-container"
              className="col-12 text-center my-4"
            >
              <div
                className="shadow rounded p-1 mt-2 mb-4"
                style={{ background: "rgb(183, 32, 46)", color: "white" }}
              >
                <i className="fa fa-bell fa-fw mr-1" />
                Notifications
              </div>
              <div
                id="notification-list"
                className="list-group list-group-flush shadow-sm p-1 rounded"
              >
                <Notifications />
                <Notifications />
                <Notifications />
                <Notifications />
                <Notifications />
                <Notifications />
              </div>
            </div>
          </Route>
          <Route render={() => <Redirect to="/assignments" />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Container;
