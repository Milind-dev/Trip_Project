import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

function App() {
  return <Counter name="Example" initialCount={5} />;
}

render(<App />, document.getElementById('root'));
