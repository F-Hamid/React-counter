export const buttonsMapDispatchToState = (dispatch) => {
  return {
    increase: () => {
      dispatch({ type: "INCREASE" });
    },
    decrease: () => {
      dispatch({ type: "DECREASE" });
    },
    reset: () => {
      dispatch({ type: "RESET" });
    },
  };
};

export const resetMapDispatchToProps = (dispatch) => {
  return {
    restore: () => dispatch({ type: "RESTORE" }),
    keep: () => dispatch({ type: "KEEP" }),
  };
};
