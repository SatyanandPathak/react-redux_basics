import * as actionTypes from './actions'

const initialiState = {
    counter: 0,
    results: []
}

const rootReducer = (state=initialiState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter : state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
            counter : state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter : state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            console.log("store result reducere==", state.counter)

            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
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

export default rootReducer;