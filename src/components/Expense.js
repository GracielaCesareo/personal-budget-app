import React from 'react';

const Expense = ({expense}) => (
    <li className="gastos">
        <p>
            {expense.expensename}
            <span className="gasto">$ {expense.amount}</span>
        </p>

    </li>
);

export default Expense;
