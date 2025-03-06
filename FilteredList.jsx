import React, { useState, useMemo } from 'react';

function calculateFactorial(n) {
  console.log('Calculating factorial of', n);
  if (n === 0 || n === 1) return 1;
  return n * calculateFactorial(n - 1);
}

function FilteredList() {
  const [number, setNumber] = useState(1);
  const [randomValue, setRandomValue] = useState(0);

  const factorial = useMemo(() => {
    return calculateFactorial(number);
  }, [number]); 

  console.log('Component re-rendered'); 

  return (
    <div>
        <h1>Use Memo Example</h1>
        <p>Enter a number:</p>
        <input type="number" value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      
      <p>
        Factorial of {number} is: <strong>{factorial}</strong>
      </p>
      <p>
        Random value: {randomValue} </p>
        <button onClick={() => setRandomValue(Math.random())}>
          Update Random Value
        </button>
    </div>
  );
}

export default FilteredList;