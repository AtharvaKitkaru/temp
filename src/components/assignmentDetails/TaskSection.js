import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import $ from "jquery";
class TaskSection extends React.Component {
  constructor() {
    super();
    this.state = {
      inputCount: 0
    };
  }
  // if inputCount is decremented, previous Id may overlap.
  delete = e => {
    $(e.target)
      .parent()
      .remove();
  };
  inputFile = () => {
    let that = this;
    let id = `file-${this.state.inputCount}`;
    $.when(
      $("#file-list").append(
        `<li class="list-group-item mx-auto col-12 align-items-center" id="${id}-li" style="border-left: .2em solid rgb(183, 32, 46)">
        <label class="col-10 text-left p-1" style="font: 13px Inter;" for=${id} id="${id}-label"
        ></label>
        <input type="file" class="form-control-file" style="display: none" id=${id} name=${id} />
        <i class="fa fa-times m-auto col-1" id="${id}-i"></i>
        </li>
        `
      )
    )
      .then(
        document.getElementById(`${id}`).onchange(function() {
          console.log("hey")
        }),

        $(`#${id}`)
          .trigger("click")
          .when(
            this.on("change", function() {
              if (this.files.length === 0) {
                console.log("empty");
                $(`#${id}-li`).remove();
              } else {
                console.log("not empty");
                $(`#${id}-label`).html(this.files[0].name);
                $(`#${id}-i`).on("click", that.delete);
              }
            })
          )
      )
      .then(function() {
        that.setState({
          inputCount: that.state.inputCount + 1
        });
      });
  };
  render() {
    return (
      <div className="container p-3 shadow-sm rounded text-center">
        <div>
          <p className="" style={{ fontWeight: "500", fontSize: "1.2em" }}>
            Upload Documents
          </p>
        </div>
        <Form style={{ fontSize: "0.8em" }}>
          <Form.Group className="p-2">
            <Button
              id="input-btn"
              className="w-75"
              variant="danger"
              onClick={this.inputFile}
            >
              Attach file
            </Button>
            <ul className="list-group mt-4" id="file-list">
              {""}
            </ul>
          </Form.Group>
          <Button
            type="submit"
            className="p-2 my-4 shadow w-75"
            id="upload-files-button"
          >
            Submit documents
          </Button>
        </Form>
      </div>
    );
  }
}
export default TaskSection;
