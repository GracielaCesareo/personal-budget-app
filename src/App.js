import React, {useState, useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import ExpensesList from './components/ExpensesList';
import BudgetControl from './components/BudgetControl'



function App() {
  // Set State Save Budget
  const [ budget, saveBudget] = useState(0);
  // Set State Remaining
  const [ remaining, saveRemaining ] = useState(0);
  // Set State Show Component
  const [ showquestioncomponent, updateQuestionComponent] = useState (true);
  // Set State Expense
  const [ expenses, saveExpenses] = useState([]);

  const [ expense, saveExpense ] = useState({});
  // Set State created expense
  const [ createexpense, saveExpenseCreated] = useState(false)

  // UseEffect update remaining
  useEffect(() => {
    // New Budget
    if(createexpense){
      saveExpenses([
        ...expenses,
        expense
      ])
    }
    // Actual Budget
    const newBudget = remaining - expense.amount
    saveRemaining(newBudget)

    // Reset to false 
    saveExpenseCreated(false)
    
  }, [expense])




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
                    <Form 
                      saveExpense={saveExpense}
                      saveExpenseCreated={saveExpenseCreated}
                    />
                  </div>
                  <div className="one-half column">
                    <ExpensesList 
                      expenses={expenses}
                    />

                    <BudgetControl 
                      budget={budget}
                      remaining={remaining}
                    />
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
