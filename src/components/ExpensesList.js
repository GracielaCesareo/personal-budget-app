import React from 'react';
import Expense from './Expense';

const Expenses = ({expenses}) => (
    <div className="gastos-realizados">
            <h2>Expenses List</h2>
            {expenses.map(expense => (
                <Expense
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
);

export default Expenses;
