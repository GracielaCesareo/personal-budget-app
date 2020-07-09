import React, {useState} from 'react';
import ErrorAlert from './ErrorAlert';
import shortid from 'shortid'


const Form = ({saveNewExpense}) => {
    // Set State Expense Name
    const [ expensename, saveExpenseName] = useState('');
    // Set State Save Amount
    const [ amount, saveAmount] = useState(0);
    // Set State Error
    const [ error, saveError] = useState (false);

    const addExpense = (e) => {
        e.preventDefault();

        // Input Validation
        if( amount <= 0 || isNaN(amount) || expensename.trim() === ''){
            saveError(true);
            return
        }
        saveError(false);

        // Object expense

        const expense = {
            expensename,
            amount,
            id: shortid.generate()
        }

        // Save New Expense Function
        saveNewExpense(expense);

        // Reset Form
        saveExpenseName('');
        saveAmount(0);
    }
    return (
        <form
            onSubmit={addExpense}
        
        >
            <h2>Add your expenses</h2>

            {error ? <ErrorAlert message="There is an error" /> : null}

            <div className="campo">
                <label htmlFor="">Expense</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Transportation"
                    value={expensename}
                    onChange={e => saveExpenseName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 300"
                    value={amount}
                    onChange={e => saveAmount(e.target.value)}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>
     );
}
 
export default Form ;
