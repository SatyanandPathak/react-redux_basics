import * as actionTypes from '../actions'

const initialState = {
    counter: 0,
    results: []
}

const resultsReducer = (state=initialState, action) => {

    switch (action.type) {
        
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // results: state.results.concat({id: new Date(), value: state.counter})  // with single reducer
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT :
            // const id = 1
            // const newArray = [...state.results]
            // newArray.splice(id, 1)
            
            // Here filter is used to immutably remove the element from an array
            const updatedArray = state.results.filter((result, index) => result.id !== action.resultElementId);
            return {
                ...state,
                results: updatedArray
            }
        default:
            break;
    }

    return state;
}

export default resultsReducer;