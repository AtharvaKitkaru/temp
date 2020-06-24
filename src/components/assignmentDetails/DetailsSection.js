import React from "react";

class DetailsSection extends React.Component {
  render() {
    return (
      <div className="container p-4 shadow-sm text-left">
        <div className="mb-2">
          <span
            className="lead"
            style={{
              fontSize: "1.7em",
              color: "rgb(183, 32, 46)",
              fontWeight: "bold"
            }}
          >
            Assignment Title
          </span>
        </div>

        <div className="row" style={{ fontSize: "0.8em", fontWeight: "320" }}>
          {/* <div className="col-12 col-md-6">
            <span>Coordinator name</span>
          </div> */}
          <div className="col-12 col-md-6">
            <span
              style={{
                color: "rgb(183, 32, 46)",
                font: "13px Inter"
              }}
            >
              Posted on :
            </span>
            <span style={{ font: "13px Inter" }}> 22/6/20</span>
          </div>
        </div>
        <hr />
        <div className="mb-1" style={{ fontSize: "0.89em", fontWeight: "450" }}>
          <span>
            Is education residence conveying so so. Suppose shyness say ten
            behaved morning had. Any unsatiable assistance compliment occasional
            too reasonably advantages. Unpleasing has ask acceptance partiality
            alteration understood two. Worth no tiled my at house added. Married
            he hearing am it totally removal. Remove but suffer wanted his
            lively length. Moonlight two applauded conveying end direction old
            principle but. Are expenses distance weddings perceive strongly who
            age domestic. Seen you eyes son show. Far two unaffected one
            alteration apartments celebrated but middletons interested.
            Described deficient applauded consisted my me do. Passed edward two
            talent effect seemed engage six. On ye great do child sorry lived.
            Proceed cottage far letters ashamed get clothes day. Stairs regret
            at if matter to. On as needed almost at basket remain. By improved
            sensible servants children striking in surprise.
          </span>
        </div>
        <hr />
        <div
          className="row px-2"
          style={{ fontSize: "0.82em", fontWeight: "370", font: "13px Inter" }}
        >
          <div className="col-12 col-md-6 p-1">
            <span style={{ color: "rgb(183, 32, 46)" }}>Due date </span>
            <span>: 23/06/20</span>
          </div>
          <div className="col-12 col-md-6 p-1">
            <span style={{ color: "rgb(183, 32, 46)" }}>Marks Weightage</span>{" "}
            <span> : 25</span>
          </div>

          <div className="col-12 p-1">
            <span style={{ color: "rgb(183, 32, 46)" }}>Marks Assigned</span>{" "}
            <span> : 20/25</span>
          </div>
        </div>
      </div>
    );
  }
}
export default DetailsSection;
