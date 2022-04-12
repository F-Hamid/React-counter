const defaultState = {
  count: 0,
  showModal: false,
};

const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREASE": {
      return { ...state, count: state.count + 1, showModal: false };
    }
    case "DECREASE": {
      return { ...state, count: state.count - 1, showModal: false };
    }
    case "RESET": {
      return { ...state, showModal: true };
    }
    case "RESTORE": {
      return { ...state, count: 0, showModal: false };
    }
    case "KEEP": {
      return { ...state, count: state.count, showModal: false };
    }
    default:
      return state;
  }
};

export default countReducer;
