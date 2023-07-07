import React, { useState } from 'react';
import { useReducer } from 'react';

const initialState = {
    counter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 }

        case "DECREMENT":
            return { ...state, counter: state.counter - 1 }

        case "RESET":
            return { ...state, counter: 0 }


        default:
            return state
            break;
    }
}

// useReducer is basically is used to manage the state of the component individually but 
// redux is used to manage the state of the whole application don't get confused in that. 
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" })
    }
    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" })
    }
    const handleReset = () => {
        dispatch({ type: "RESET" })
    }


    return (
        <div>
            <h2>Counter: {state.counter}</h2>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

