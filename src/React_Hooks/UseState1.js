import React, { useState } from 'react';

export default function UseState1() {
    const [count, setCount] = useState(0); // 0 initial value

    return (
      <div>
        <p>गिनती: {count}</p>
        <button onClick={() => setCount(count + 1)}>बढ़ाएँ</button>
      </div>
    );
}
