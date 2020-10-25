import React from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../store/actions'

import CounterControls from '../components/CounterControls/CounterControls';
import CounterOutput from '../components/CounterOutput/CounterOutput';


class Counter extends React.Component {

    // state = {
    //     counter : 0,
    //     results: []
    // }

    counterChangeHandler = (action, value) => {
        console.log(value)
        switch (action) {
            case 'inc':
                this.setState((prevState) => {return {counter: prevState.counter + 1}}) 
                break;
            case 'dec':
                this.setState((prevState) => {return {counter: prevState.counter - 1}})
                break;
            case 'add5':
                this.setState((prevState) => {return {counter: prevState.counter + value}})
                break;
            case 'sub5':
                this.setState((prevState) => {return {counter: prevState.counter - value}})
                break;
            default:
                break;
        }

    }

    render() {
        return (
            <div>
                <CounterOutput value = {this.props.ctr}/>
                <CounterControls label = "Increment" clicked = {this.props.onIncrementCounter}/>
                <CounterControls label = "Decrement" clicked = {this.props.onDecrementCounter}/>
                <CounterControls label = "Increse By 5" clicked = {this.props.onAddValue}/>
                <CounterControls label = "Decrease by 5" clicked = {this.props.onSubtractValue}/>
                <hr/>
                <button onClick = {() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((result, index) => {
                        return (<li key = {index} onClick = {() => this.props.onDeleteResult(result.id)}>{result.id.toString()} - {result.value}</li>)
                    }
                    )}
                    
                </ul>
            </div>
        )
    }
}

// This function is called by React redux, which maps Redux state to Props
const mapStateToProps = (state) => {
    return {
        ctr: state.ctrReducer.counter,
        storedResults: state.resReducer.results
    }
}

const mapDispatchToProps = (dispatch) => ({
    onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    onAddValue: () => dispatch({type: actionTypes.ADD, value: 5}),
    onSubtractValue: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
    onStoreResult : (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
