import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const App = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
