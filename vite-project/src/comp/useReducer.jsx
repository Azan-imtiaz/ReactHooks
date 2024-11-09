import React, { useReducer } from 'react';

/**
 * `counterReducer`: A reducer function that handles different actions related to the counter.
 * It takes the current state and an action object and returns a new state.
 */
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

/**
 * `UseReducer` component demonstrates how to manage complex state using `useReducer`.
 * In this example, we are managing the state of a counter (with increment, decrement, and reset actions).
 */
const UseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Counter App using useReducer</h1>

      {/* Explanation section */}
      <div className="text-lg text-gray-700 mb-6">
        <p>
          <strong>What is `useReducer`?</strong><br />
          The <strong>useReducer</strong> hook is an alternative to <strong>useState</strong> for managing state. It is useful when the state logic is complex or depends on multiple actions. Unlike <strong>useState</strong>, which handles simple state updates, <strong>useReducer</strong> allows you to define a reducer function that returns new state based on specific actions.
        </p>
        <p>
          <strong>Why do we need `useReducer`?</strong><br />
          `useReducer` is especially beneficial when:
          <ul>
            <li>The state logic involves multiple sub-values or requires complex transitions.</li>
            <li>You need to handle different actions that update the state in different ways.</li>
            <li>You want a more predictable way to manage the state (similar to Redux in React).</li>
          </ul>
        </p>
        <p>
          <strong>Where can you use `useReducer`?</strong><br />
          Use `useReducer` when managing state that involves actions like increment, decrement, reset, or any scenario where multiple conditions or transitions might occur based on specific triggers. It is especially useful in scenarios like forms, to-do lists, or complex data management.
        </p>
        <p>
          <strong>Syntax Explanation:</strong><br />
          The <strong>useReducer</strong> hook has the following syntax:
          <pre><code>const [state, dispatch] = useReducer(reducerFunction, initialState);</code></pre>
          - <strong>reducerFunction</strong>: This is a function that takes the current state and an action, and returns a new state based on the action type.
          - <strong>initialState</strong>: This is the initial state value that the hook starts with.
        </p>
        <p>
          <strong>How does the `counterReducer` function work?</strong><br />
          The reducer function <strong>counterReducer</strong> manages the state of the counter. It takes the current state and an action and updates the state based on the action's type:
          <ul>
            <li><strong>INCREMENT</strong>: Increases the counter by 1.</li>
            <li><strong>DECREMENT</strong>: Decreases the counter by 1.</li>
            <li><strong>RESET</strong>: Resets the counter to 0.</li>
          </ul>
        </p>
      </div>

      {/* Display current state */}
      <p className="text-xl mb-4">Current Count: {state.count}</p>

      {/* Buttons to trigger state changes */}
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors mb-2"
      >
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition-colors mb-2"
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
