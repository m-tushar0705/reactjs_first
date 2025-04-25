import React from 'react'

const expensiveCalculation = (num) => {
    console.log("calculating...");
    return num * 2;
  };
  

export default function UseMemo5({ number }) {
    const result = React.useMemo(() => expensiveCalculation(number), [number]);

    return <p>नतीजा: {result}</p>;
}
