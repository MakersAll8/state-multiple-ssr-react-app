import React, { useEffect, useRef, useState } from 'react'
import { HeaderSDK } from './HeaderSDK';
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = { count: 0 };
export function defaultReducer(state = initialState, action) {
    return state
}
const defaultStore = createStore(defaultReducer);

function Counter({ count, increment, decrement }) {
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }

  function mapStateToProps(state) {
    return {
      count: state.count,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
    };
  }

  const Section = connect(mapStateToProps, mapDispatchToProps)(Counter);


export const Home = ({name}) => {    
    return (
        <>
            <h1>Home</h1>
            <HeaderSDK/>
            <Section />
            <a href="/app1/client-side-routing">Client Side Routing</a>
        </>
    )
}
