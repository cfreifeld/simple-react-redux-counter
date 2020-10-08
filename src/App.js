import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import {connect, Provider} from "react-redux";
import {createStore} from "redux";
import counterReducer from "./reducers";

const stateToPropertyMapper = (state) => {
  return {
    value: state.value,
    foo: state.value * state.value
  }
}
const CounterApp = connect(stateToPropertyMapper)(Counter)
const store = createStore(counterReducer)

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <CounterApp/>
        </div>
      </Provider>
  );
}

export default App;
