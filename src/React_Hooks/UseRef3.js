import React, { useState, useRef } from 'react';


// export default function UseRef3() {
//   const [input, setInput] = useState('');
//   const count = useRef(0); // ये re-render नहीं करता

//   const handleChange = (e) => {
//     setInput(e.target.value);
//     count.current += 1; // हर बार input बदलेगा, count बढ़ेगा
//   };

//   return (
//     <div>
//       <input value={input} onChange={handleChange} />
//       <p>Input बदला गया: {count.current} बार</p>
//     </div>
//   );
// }

export default function UseRef3() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // input field को focus करो
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="कुछ लिखो..." />
      <button onClick={handleFocus}>Focus करो</button>
    </>
  );
}
