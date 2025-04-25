import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';

import UseState1 from './React_Hooks/UseState1';
import UseEffect2 from './React_Hooks/UseEffect2';
import UseRef3 from './React_Hooks/UseRef3';
import UseContext4 from './React_Hooks/UseContext4';
import UseMemo5 from './React_Hooks/UseMemo5';
import UseCallback6 from './React_Hooks/UseCallback6';
import UseReducer7 from './React_Hooks/UseReducer7';

// UseContext Auth 
import Apps from './UseContext/App';


export default function App() {
  return (
    <Router>
      <h1>React Hooks Example</h1>
      <Link to="/">Home</Link>&nbsp; 
      <Link to="/usestate">UseState1</Link>&nbsp;
      <Link to="/useeffect">UseEffect2</Link>&nbsp;
      <Link to="/useref">UseRef3</Link>&nbsp;
      <Link to="/usecontext">UseContext4</Link>&nbsp;
      <Link to="/usememo">UseMemo5</Link>&nbsp;
      <Link to="/usecallback">UseCallback6</Link>&nbsp;
      <Link to="/usereducer">UseReducer7</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/contextauth">UseContext</Link>&nbsp;
   
      <Routes>
        <Route path='/' element={"Home"} />
        <Route path='/usestate' element={<UseState1 />} />
        <Route path='/useeffect' element={<UseEffect2 />} />
        <Route path='/useref' element={<UseRef3 />} />
        <Route path='/usecontext' element={<UseContext4 />} />
        <Route path='/usememo' element={<UseMemo5 />} />
        <Route path='/usecallback' element={<UseCallback6 />} />
        <Route path='/usereducer' element={<UseReducer7 />} />
        <Route path='/contextauth' element={<Apps />} />
      
      </Routes>
    </Router>
  );
}
