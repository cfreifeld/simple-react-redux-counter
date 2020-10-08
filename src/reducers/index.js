import {MINUS, PLUS} from "../constants";

const counterReducer = (state = { value: 0 }, action) => {
      switch (action.type) {
        case PLUS:
          //alert('plus')
          return { value: state.value + 1 }
        case MINUS:
          //alert('minus')
          return { value: state.value - 1 }
        default:
          return state
      }
}
export default counterReducer