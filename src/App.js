import React, {useState} from 'react';
import Question from './components/Question';



function App() {
  // Set State Save Budget
  const [ budget, saveBudget] = useState(0);
  // Set State Remaining
  const [ remaining, saveRemaining ] = useState(0);


  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="contenido-principal contenido">
          <Question 
            saveBudget={saveBudget}
            saveRemaining={saveRemaining}
          />
        </div>
        
      </header>
     
    </div>
  );
}

export default App;
