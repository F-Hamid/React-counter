import React from "react";
import { connect } from "react-redux";
import { resetMapDispatchToProps } from "./action";

import "./styles.css";

const Modal = ({ showModal, restore, keep }) => {
  const [modal, setModal] = React.useState(showModal);

  const resetHandler = () => {
    setModal(!showModal);
    restore();
  };
  const keeptHandler = () => {
    setModal(!showModal);
    keep();
  };

  return (
    <>
      <div className={`card modal section ${modal ? "" : "hide"}`}>
        <div className="card-header button">Warning!</div>
        <div className="card-body">
          <p className="card-text">
            Are you sure you want to reset your count?
          </p>
          <button
            onClick={keeptHandler}
            type="button"
            className="btn button  btn-success "
          >
            Go Back
          </button>
          <button
            onClick={resetHandler}
            type="button"
            className="btn button btn-danger "
          >
            Yes
          </button>
        </div>
      </div>
      <div
        onClick={keeptHandler}
        className={`overlay ${modal ? "" : "hide"}`}
      ></div>
    </>
  );
};

// Dispatch
resetMapDispatchToProps();

export default connect(null, resetMapDispatchToProps)(Modal);
