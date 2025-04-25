import React from 'react'

function reducer(state, action) {
    switch (action.type) {
      case 'increment': return { count: state.count + 1 };
      case 'decrement': return { count: state.count - 1 };
      default: return state;
    }
  }

export default function UseReducer7() {
    const [state, dispatch] = React.useReducer(reducer, { count: 0 });

    return (
      <>
        <p>गिनती: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      </>
    );
}
