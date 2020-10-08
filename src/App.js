import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import counterReducer from "./reducers";
import CounterApp from "./containers/CounterApp";

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
