import React from 'react';
import './App.css';
import ReactJSX, { ReactNoJSX } from './components/ReactJSX';
import CompAndProps from './components/CompAndProps';
import Button from './elements/Button';
import TextInput from './elements/TextInput';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />
        <ReactNoJSX />
        <div className="Components">
          <form action="">
            <TextInput border="pink" placeholder="Nama" />
            <Button background="pink">Kirim</Button>
          </form>
          <CompAndProps bgColor="#861a1a" />
        </div>

      </header>
    </div>
  );
}
export default App;