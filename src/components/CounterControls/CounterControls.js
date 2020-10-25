import React from 'react';

import './CounterControls.css'

const CounterControls = (props) => {
    return (
        <div className = "CounterControl" onClick = {props.clicked}>
            {props.label}
        </div>
    );
}

export default CounterControls;