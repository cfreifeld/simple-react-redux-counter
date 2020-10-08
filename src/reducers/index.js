const counterReducer = (state = { value: 0 }, action) => {
      switch (action.type) {
        case 'plus':
          //alert('plus')
          return { value: state.value + 1 }
        case 'minus':
          //alert('minus')
          return { value: state.value - 1 }
        default:
          return state
      }
}
export default counterReducer