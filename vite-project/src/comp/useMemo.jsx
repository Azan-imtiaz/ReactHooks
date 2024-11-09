import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
  ]);

  // Filter function (expensive operation)
  const filterItems = (input) => {
    console.log('Filtering items...');
    return items.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  // Memoizing the filtered items to prevent recalculation unless the inputValue changes
  const filteredItems = useMemo(() => filterItems(inputValue), [inputValue, items]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">
        useMemo Hook: Filtering Items
      </h1>

      <p>
        The <strong>useMemo</strong> hook is used here to optimize the filtering of items. Normally, filtering would be recalculated on every re-render, but with <strong>useMemo</strong>, it is only recalculated when the <strong>inputValue</strong> or <strong>items</strong> change.
      </p>

      <p>
        <strong>Why Do We Need useMemo?</strong><br />
        In scenarios where we are filtering a large list of items or performing other heavy operations, unnecessary recalculations on every re-render can slow down the app. Using <strong>useMemo</strong> ensures that we only recalculate the filtered list when necessary (when the `inputValue` changes).
      </p>

      <p>
        <strong>useMemo Syntax:</strong><br />
        <code>
          const memoizedValue = useMemo(() =&gt; expensiveFunction(), [dependencies]);
        </code>
        <br />
        <strong>useMemo</strong> accepts two arguments:
        <ul>
          <li><strong>Function</strong> - The function (like filtering) that you want to memoize.</li>
          <li><strong>Dependencies</strong> - An array of dependencies that determine when the function should be recalculated.</li>
        </ul>
      </p>

      <p>
        <strong>Practical Example of useMemo:</strong><br />
        In this example, we filter a list of items based on user input. With <strong>useMemo</strong>, the filter function will only run when the <strong>inputValue</strong> changes, which improves performance if the list of items is large.
      </p>

      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 border rounded"
          placeholder="Search items..."
        />
      </div>

      <div className="mb-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Increment Count
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold">Filtered Items</h2>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      <p>
        <strong>Memoized Filtered Items:</strong><br />
        The filtered list only recalculates when <strong>inputValue</strong> or <strong>items</strong> changes. This is achieved using <strong>useMemo</strong>.
      </p>
    </div>
  );
};

export default UseMemo;
