import React, { Component } from "react";
import "./GroupRegistrationLink.scss";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import $ from "jquery";
class GroupRegistrationLink extends Component {
  constructor() {
    super();
    this.state =
      JSON.parse(localStorage.getItem("groupRegistrationFormData")) || {};
  }
  /*handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };*/
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // if (e.target.name === "leader-roll-number") {
    //   if (e.target.value <= 1610000 || e.target.value >= 2010000) {
    //     console.error("Invalid roll number");
    //   }
    // }
  };

  validateForm = () => {
    let roll1 = document.getElementById("group_leader_roll").value;
    let roll2 = document.getElementById("rollNumMem2").value;
    let roll3 = document.getElementById("rollNumMem3").value;
    let roll4 = document.getElementById("rollNumMem4").value;

    let arrRoll = [roll1, roll2];
    if (roll3 !== "") {
      arrRoll.push(roll3);
    }
    if (roll4 !== "") {
      arrRoll.push(roll4);
    }

    const s = new Set(arrRoll);

    let result1 = false;

    if (arrRoll.length === s.size) {
      result1 = true;
    }
    let email1 = document.getElementById("group_leader_email").value;
    let email2 = document.getElementById("emailIdMem2").value;
    let email3 = document.getElementById("emailIdMem3").value;
    let email4 = document.getElementById("emailIdMem4").value;

    let emailRoll = [email1, email2];
    if (email3 !== "") {
      emailRoll.push(email3);
    }
    if (email4 !== "") {
      emailRoll.push(email4);
    }

    const s2 = new Set(emailRoll);

    let result2 = false;

    if (emailRoll.length === s2.size) {
      result2 = true;
    }
    return result1 && result2;
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    localStorage.setItem(
      "groupRegistrationFormData",
      JSON.stringify(this.state)
    );
    let result = this.validateForm();
    if (result) {
      this.setState({ successfulSubmission: true });
    } 
    else {
      $("#error").css({"display":"block"})
    }
  };
  render() {
    if (this.state.successfulSubmission) {
      return <Redirect to="/project-registration" />;
    }
    return (
      //<div>
      //<div style={{ margin: "2em" }} />

      <div className="container shadow">
        <div id="group-registration-link">

            <div
              class="alert alert-danger  fade show text-center"
              role="alert"
              id="error"
              style = {{display:"none"}}
            >
              <strong>Error!</strong> No 2 students can have the same email or
              roll number.
              
            </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 25
            }}
          >
            
            <p
              className="title lead font-weight-bold"
              style={{ color: "rgb(183, 32, 46)" }}
            >
              Group Registration
            </p>
            {/*<div style={{}} />*/}
          </div>
          <Form
            onSubmit={this.handleSubmit}
            className="group-registration mx-auto my-md-1 mt-1 col-12"
          >
            <div className="row">
              <FormGroup className="col-md-4 col-12">
                <Label for="group_leader_name">
                  Group Leader Name<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="group_leader_name"
                  id="group_leader_name"
                  value={this.state.group_leader_name}
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="group_leader_roll">
                  Group Leader Roll Number
                  <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  name="group_leader_roll"
                  id="group_leader_roll"
                  value={this.state.group_leader_roll}
                  placeholder="Enter you roll number"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="group_leader_email">
                  Group Leader Email<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="group_leader_email"
                  id="group_leader_email"
                  value={this.state.group_leader_email}
                  placeholder="Enter your email"
                />
              </FormGroup>
            </div>
            <hr />
            <div className="row">
              <FormGroup className="col-md-4 col-12">
                <Label for="nameMem2">
                  Member 2 Name<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="nameMem2"
                  id="nameMem2"
                  value={this.state.nameMem2}
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="rollNumMem2">
                  Member 2 Roll Number<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  name="rollNumMem2"
                  id="rollNumMem2"
                  value={this.state.rollNumMem2}
                  placeholder="Enter you roll number"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="emailIdMem2">
                  Member 2 Email<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="emailIdMem2"
                  id="emailIdMem2"
                  value={this.state.emailIdMem2}
                  placeholder="Enter your email"
                />
              </FormGroup>
            </div>
            <hr />
            <div className="row">
              <FormGroup className="col-md-4 col-12">
                <Label for="nameMem3">Member 3 Name</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="nameMem3"
                  id="nameMem3"
                  value={this.state.nameMem3}
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="rollNumMem3">Member 3 Roll Number</Label>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  name="rollNumMem3"
                  id="rollNumMem3"
                  value={this.state.rollNumMem3}
                  placeholder="Enter you roll number"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="emailIdMem3">Member 3 Email</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="emailIdMem3"
                  id="emailIdMem3"
                  value={this.state.emailIdMem3}
                  placeholder="Enter your email"
                />
              </FormGroup>
            </div>
            <hr />
            <div className="row">
              <FormGroup className="col-md-4 col-12">
                <Label for="nameMem4">Member 4 Name</Label>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="nameMem4"
                  id="nameMem4"
                  value={this.state.nameMem4}
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="rollNumMem4">Member 4 Roll Number</Label>
                <Input
                  onChange={this.handleChange}
                  type="number"
                  name="rollNumMem4"
                  id="rollNumMem4"
                  value={this.state.rollNumMem4}
                  placeholder="Enter you roll number"
                />
              </FormGroup>
              <FormGroup className="col-md-4 col-12">
                <Label for="emailIdMem4">Member 4 Email</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="emailIdMem4"
                  id="emailIdMem4"
                  value={this.state.emailIdMem4}
                  placeholder="Enter your email"
                />
              </FormGroup>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                className="btn"
                style={{
                  backgroundColor: "rgb(183, 32, 46)",
                  color: "white",
                  outline: "none",
                  boxShadow: "none"
                }}
                type="submit"
              >
                Save and Proceed to Project Registration
              </Button>
            </div>
          </Form>
        </div>
      </div>
      //</div>
    );
  }
}
export default GroupRegistrationLink;
