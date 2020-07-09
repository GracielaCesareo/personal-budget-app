import React, {useState} from 'react';

const Form = () => {
    // Set State Expense Name
    const [ expensename, saveExpenseName] = useState('');
    // Set State Save Amount
    const [ amount, saveAmount] = useState(0);

    const addExpense = e => {
        e.preventDefault();

        
    }
    return (
        <form
            onSubmit={addExpense}
        
        >
            <h2>Add your expenses</h2>
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
