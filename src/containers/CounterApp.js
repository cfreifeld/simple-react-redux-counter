import {minus, plus} from "../actions";
import {connect} from "react-redux";
import Counter from "../components/Counter";

const stateToPropertyMapper = (state) => {
  return {
    value: state.value,
    squared: state.value * state.value
  }
}
const dispatcherToPropertyMapper = dispatch => ({
  plus: () => plus(dispatch),
  minus: () => minus(dispatch)
})

const CounterApp = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(Counter)
export default CounterApp