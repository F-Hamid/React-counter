import React from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import { buttonsMapDispatchToState } from "./action";

import "./styles.css";

const Counter = ({ count, increase, decrease, reset, showModal }) => {
  return (
    <>
      <div className="section">
        <h1 className="counter">{count}</h1>
        <div className="container">
          <button onClick={decrease} type="button" className="btn btn-danger">
            - 
          </button>
          <button
            onClick={reset}
            type="button"
            className="btn button btn-secondary"
          >
            Reset
          </button>

          <button onClick={increase} type="button" className="btn btn-success ">
            + 
          </button>
        </div>
        <h1>Counter</h1>
      </div>
      {showModal && <Modal showModal={showModal} count={count} rest={reset} />}
    </>
  );
};

// Dispatch
buttonsMapDispatchToState();
// State access
const mapStateToProps = ({ count, showModal }) => {
  return { count, showModal };
};
export default connect(mapStateToProps, buttonsMapDispatchToState)(Counter);
