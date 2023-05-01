import React from 'react'
import { connect } from 'react-redux';

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


export const Header = () => {
    return (
        <div style={{border: '1px solid red'}}>
            <h1>Header Component</h1>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Section />
                <Section />
            </div>
        </div>
    )
}
