import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

// import Count from "./components/Count";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import countReducer from "./components/countReducer";

const App = () => {
  const store = createStore(countReducer);
  return (
    <Provider store={store}>
      <Counter />
      <Modal />
    </Provider>
  );
};

export default App;
