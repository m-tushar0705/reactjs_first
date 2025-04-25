import React, { useState, useEffect } from 'react';

export default function UseEffect2() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => setSeconds(s => s + 1), 1000);
  
      return () => clearInterval(interval); // cleanup
    }, []); // खाली dependency => सिर्फ एक बार चलेगा
  
    return <p>समय: {seconds} सेकंड</p>;
}
