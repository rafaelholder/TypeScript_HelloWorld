import React from 'react';
import './App.css';

function App() {

  // 1- Var
  const name: string = 'Rafael';
  const age: number = 20;
  const isWorking: boolean = true;

  // 2 - functions
  const userGreet = (name: string): string => {
    return `Ola ${name}!`;
  }


  return (
    <div className="App">
      <h1>TypeScript com react</h1>
      <h2>Nome: {name}. Idade: {age}</h2>
      {isWorking && (
        <div>
          <p>Is Working!</p>
          <p>{userGreet(name)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
