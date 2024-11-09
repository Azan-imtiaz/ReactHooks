import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // The function that we want to memoize with useCallback
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Empty dependency array ensures the function is created only once

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">useCallback Example</h1>

      {/* Explanation for useCallback */}
      <div className="text-lg text-gray-700 mb-6">
        <p>
          <strong>What is `useCallback`?</strong><br />
          The <strong>useCallback</strong> hook is used to memoize functions, meaning it returns a cached version of the function that only changes if one of its dependencies changes. This can help optimize performance by preventing unnecessary re-creations of functions on each render.
        </p>
        <p>
          <strong>Why do we need `useCallback`?</strong><br />
          When passing functions as props to child components, if those functions are re-created on every render, it could cause unnecessary re-renders in child components. <strong>useCallback</strong> helps prevent this by ensuring that the function only changes when its dependencies change.
        </p>
        <p>
          <strong>Where can you use `useCallback`?</strong><br />
          Use <strong>useCallback</strong> in situations where you need to pass functions to child components and want to avoid unnecessary re-renders. For example, in lists or forms where performance could degrade if the functions are recreated too often.
        </p>
        <p>
          <strong>Syntax Explanation:</strong><br />
          The syntax for <strong>useCallback</strong> is:
          <pre><code>const memoizedFunction = useCallback(callbackFunction, [dependencies]);</code></pre>
          - <strong>callbackFunction</strong>: The function you want to memoize.
          - <strong>dependencies</strong>: An array of dependencies that will trigger a re-creation of the memoized function. If the dependencies don't change, the function remains the same.
        </p>
        <p>
          <strong>How does `useCallback` work in this example?</strong><br />
          In this example, the <strong>increment</strong> function is memoized using <strong>useCallback</strong>. The <strong>increment</strong> function only gets recreated when its dependencies (in this case, an empty array) change. Since there are no dependencies, the function will be created only once, optimizing performance if it's passed to other components.
        </p>
      </div>

      {/* Display the current count */}
      <p className="text-xl mb-4">Current Count: {count}</p>

      {/* Button to trigger increment */}
      <button
        onClick={increment}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors mb-2"
      >
        Increment
      </button>
    </div>
  );
};

export default UseCallback;
