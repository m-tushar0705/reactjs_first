import React from 'react'

export default function UseCallback6() {
    const [count, setCount] = React.useState(0);

    const increment = React.useCallback(() => {
      setCount(c => c + 1);
    }, []);
  
    return <button onClick={increment}>बढ़ाएँ: {count}</button>;
}
