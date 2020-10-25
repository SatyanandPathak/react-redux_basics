const redux = require('redux');
const createStore = redux.createStore;

// Step 1: Initialize the state
const initialState = {
    counter: 0
}

// Step 2: Define a Reducer which responds to the action dispatched
const rootReducer = (state=initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        // Always return immutable state
        return {
            ...state,
            counter : state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

// Step 3: Create a Store hooking up the reducer to it
const myStore = createStore(rootReducer);

console.log(myStore.getState())



// Add Subscription
myStore.subscribe(() => {
    console.log('[Subscription]', myStore.getState())
});

// Step 4: Dispatch Actions using store dispatch
myStore.dispatch({type: 'INC_COUNTER'});
myStore.dispatch({type: 'ADD_COUNTER', value: 10})


console.log(myStore.getState())

