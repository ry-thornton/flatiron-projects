import React from 'react';
import './App.css';
import Menu from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './containers/Content';

//App should always render a Menu, Content, and Footer

function App() {
  return (
    <div className="App">
      <Menu/>
      <Content/>
    </div>
  );
}

export default App;
