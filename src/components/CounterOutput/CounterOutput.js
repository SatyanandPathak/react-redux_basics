import React from 'react';

import './CounterOutput.css';

const CounterOutput = (props) => {

    return ( 
        <div className = "CounterOutput">
        Current Counter(State): {props.value}
    </div>
    )
    }


export default CounterOutput;