import React, { useState, useRef, useEffect } from 'react';

const UseRef = () => {
  // State for triggering re-render
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);
  let xx = 0; // A regular variable

  // useRef hook to persist value without triggering re-render
  const x = useRef(0); // useRef syntax: const ref = useRef(initialValue);

  // Example 1: Without useRef (State Only)
  function handleClickWithoutRef() {
    xx++; // Increment normal variable xx (no re-render)
    setVal((prev) => prev + 1); // Increment state, causing re-render
  }

  // Example 2: With useRef (State + Ref)
  function handleClickWithRef() {
    x.current++; // Increment ref value (does not trigger re-render)
    setVal2((prev) => prev + 1); // Increment state, causing re-render
  }

  // Log every render
  useEffect(() => {
    console.log('Component re-rendered');
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">
        useRef Example - State vs Ref
      </h1>

      {/* Explanation for Example 1: Without useRef */}
      <div className="text-lg text-gray-700 mb-6">
        <p>
          <strong>Example 1: Without useRef</strong><br />
          In this example, we are using only <strong>useState</strong> to manage the value. When the "Increment" button is clicked, the state value <strong>val</strong> is incremented by 1. This causes the component to re-render, and the updated value is shown on the screen.
        </p>
        <p>
          <strong>What is happening with xx?</strong><br />
          The value of <strong>xx</strong> is a normal JavaScript variable. It gets incremented with each button click, but since it's not part of React's state or ref, it doesn't cause the component to re-render. When the component re-renders (after updating the state), <strong>xx</strong> is reset to 0 and will not show any change in the UI.
        </p>
        <p>
          <strong>What is happening with state (val)?</strong><br />
          Each time you click the "Increment" button, the <strong>setVal</strong> function updates the state value, and React re-renders the component to reflect the new value on the UI. This is because <strong>useState</strong> triggers a re-render whenever the state changes.
        </p>
      </div>

      {/* Display Value for Example 1 */}
      <p className="text-xl text-gray-700 mb-6">
        Example 1: State Value (val): {val}
      </p>
      <p className="text-xl text-gray-700 mb-6">
        Normal Variable (xx): {xx}
      </p>
      <button
        onClick={handleClickWithoutRef}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors mb-4"
      >
        Increment (Without useRef)
      </button>

      {/* Explanation for Example 2: With useRef */}
      <div className="text-lg text-gray-700 mb-6">
        <p>
          <strong>Example 2: With useRef</strong><br />
          In this example, we use both <strong>useState</strong> and <strong>useRef</strong>. The state value <strong>val</strong> is incremented just like before, but we also increment the value stored in the <strong>x.current</strong> ref.
        </p>
        <p>
          <strong>What is happening with x.current?</strong><br />
          The value of <strong>x.current</strong> is updated without causing a re-render, as <strong>useRef</strong> does not trigger a re-render. The value is persisted across renders and is logged to the console. Meanwhile, the <strong>val</strong> state is updated as well, which does trigger a re-render, and the updated value is displayed on the screen.
        </p>
        <p>
          <strong>useRef Syntax:</strong><br />
          <code>const ref = useRef(initialValue);</code><br />
          The <strong>useRef</strong> hook is used to create a mutable reference object that persists across renders. The <code>current</code> property of the object holds the value. Unlike state, updating a ref does not trigger a re-render.
        </p>
      </div>

      {/* Display Value for Example 2 */}
      <p className="text-xl text-gray-700 mb-6">
        Example 2: State Value (val): {val2}
      </p>
      <p className="text-xl text-gray-700 mb-6">
        Ref Value (x.current): {x.current}
      </p>
      <button
        onClick={handleClickWithRef}
        className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
      >
        Increment (With useRef)
      </button>
    </div>
  );
};

export default UseRef;
