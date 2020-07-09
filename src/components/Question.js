import React, {Fragment, useState}from 'react';
import Error from './ErrorAlert'


const Question = ({saveBudget, saveRemaining}) => {
    // Set Sate
    const [amount, saveAmount] = useState (0);
    // Set State Error
    const [error, saveError] = useState(false);

    // Set Budget Function
    const setBudget = e => {
        saveAmount(parseInt(e.target.value))
    }

    // Set Budget Sumit Action
    const addBudget = e => {
        e.preventDefault();

        // Error validation
        if(amount <= 0 || isNaN (amount)){
            saveError(true);
            return
        }

        saveError(false);
        saveBudget(amount);
        saveRemaining(amount);

    }

    return ( 
        <Fragment>
            <h2>What's your budget?</h2>

            {error ? <Error message="There is an error in budget" /> : null}

            <form action="">
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Your budget"
                    onChange={setBudget}
                />
                <input 
                type="submit"
                className="button-primary"
                value="Set Budget"
                onClick={addBudget}
                />
            </form>
        </Fragment>
     );
}
 
export default Question;
