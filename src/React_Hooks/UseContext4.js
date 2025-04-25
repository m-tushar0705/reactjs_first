import React from 'react'
const ThemeContext = React.createContext('light');

function MyComponent() {
    const theme = React.useContext(ThemeContext);
    return <p>थीम: {theme}</p>;
  }

export default function UseContext4() {


 return (
    <ThemeContext.Provider value="dark">
      <MyComponent />
    </ThemeContext.Provider>
  );
}
