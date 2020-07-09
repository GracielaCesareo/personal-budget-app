import React, {useState} from 'react';
import Question from './components/Question';
import Form from './components/Form'

function App() {
  // Set State Save Budget
  const [ budget, saveBudget] = useState(0);
  // Set State Remaining
  const [ remaining, saveRemaining ] = useState(0);
  // Set State Show Component
  const [ showquestioncomponent, updateQuestionComponent] = useState (true)


  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="contenido-principal contenido">
          {showquestioncomponent ?
              (
                <Question
                  saveBudget={saveBudget}
                  saveRemaining={saveRemaining}
                  updateQuestionComponent={updateQuestionComponent}
                />
              )
          :
              (
                <div className="row">
                  <div className="one-half column">
                    <Form />
                  </div>
                  <div className="one-half column">
                    2
                  </div>
                </div>
              )
          }
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
