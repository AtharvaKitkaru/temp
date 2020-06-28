import React, { Component } from "react";
import "./ProjectRegistration.scss";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from "reactstrap";
import { Redirect } from 'react-router-dom';

class ProjectRegistration extends Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("projectRegistrationFormData")) || {};
  }

  handleChange = e => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  inputFile = () =>{
    document.getElementById('referenceFiles').click();
    
  }
  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("projectRegistrationFormData", JSON.stringify(this.state));
    this.setState({successfulSubmission:true});
  };

  handlePrevClick = () => {
    // console.log('inside prev click');
    localStorage.setItem("projectRegistrationFormData", JSON.stringify(this.state));
    this.setState({prevPageRedirect:true})
  };
  render() {

    if(this.state.prevPageRedirect){
      return <Redirect to = '/group-registration' />
    }
    if(this.state.successfulSubmission){
      return <Redirect to = '/waiting-page' />
    }

    return (
      //<div>
      //<div style={{ margin: "2em" }} />
      <div className="container shadow">
        <div id="project-registration-link">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 25
            }}
          >
           
            <p>
              <u>Project Registration</u>
            </p>
            {/*<div style={{}} />*/}
          </div>
          <Form
            className="project-registration mx-auto my-md-1 mt-1 col-12"
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <FormGroup className="col-md-12 col-12">
                <Label for="projName">
                  Project Name<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="projName"
                  id="projName"
                  placeholder="Enter Project name"
                  onChange={this.handleChange}
                  value={this.state.projName}
                />
              </FormGroup>
            </div>
            <div className="row">
              <FormGroup className="col-md-6 col-12">
                <Label for="projType">
                  Select Type of Project<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="select"
                  name="projType"
                  id="projType"
                  onChange={this.handleChange}
                  value={this.state.projType}
                >
                  <option>--Select--</option>
                  <option>Internal</option>
                  <option>External</option>
                  <option>Inter-Disciplinary</option>
                </Input>
              </FormGroup>
              <FormGroup className="col-md-6 col-12">
                <Label for="projDomain">
                  Select Domain of Project
                  <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="select"
                  name="projDomain"
                  id="projDomain"
                  onChange={this.handleChange}
                  value={this.state.projDomain}
                >
                  <option>--Select--</option>
                  <option>
                    Cyber Security (Forensics, Blockchain Technology, Biometrics
                    Security, Cryptographic Teachniques)
                  </option>
                  <option>Image Processing (Computer Vision)</option>
                  <option>
                    Artificial Intelligence (Machine Learning, Natural Language
                    Processing, Robotics)
                  </option>
                  <option>Computer Networking</option>
                  <option>Big Data Processing</option>
                  <option>
                    Embedded and Hardware Integrated Applications (IOT)
                  </option>
                  <option>
                    Augmented and Virtual Reality (Game Programming)
                  </option>
                  <option>GIS</option>
                  <option>Cloud Computing (High Performance Computing)</option>
                  <option>
                    System Programming (Compiler Constaruction, OS, Device
                    Drivers)
                  </option>
                  <option>Quantum Computing</option>
                  <option>Software Test Automation</option>
                </Input>
              </FormGroup>
            </div>
            <div className="row">
              <FormGroup className="col-md-12 col-12">
                <Label for="projDescription">
                  Enter the Project Description
                  <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="textarea"
                  name="projDescription"
                  rows="7"
                  id="projDescription"
                  placeholder="Description"
                  onChange={this.handleChange}
                  value={this.state.projDescription}
                />
              </FormGroup>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div style = {{height:"0px",width:"0px",overflow:"hidden"}}>
                <Input type="file" name="file" id="referenceFiles" />
              </div>
              <Button style={{backgroundColor: "rgb(183, 32, 46)",color: "white",outline: "none",boxShadow: "none"}} type="button"onClick = {this.inputFile}> Attach Files ( if any)</Button>
            </div>
            <br />
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}} className = "row mx-auto">


              <div className = "col-12 col-md-4 p-1">
                <Button className="btn" style={{backgroundColor: "rgb(183, 32, 46)",color: "white",outline: "none",boxShadow: "none"}} type="button" onClick={this.handlePrevClick}>
                  Go to previous page
                </Button>
              </div>
              
              <div className = "col-12 col-md-4 p-1">
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
                  Submit
                </Button>
              </div>

              
            </div>
          </Form>
        </div>
      </div>
      //</div>
    );
  }
}

export default ProjectRegistration;
