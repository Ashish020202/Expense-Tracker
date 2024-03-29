import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear]=useState('2022');
   const filtereChangeHandler=selectedYear=> {
    setFilteredYear(selectedYear);
   };

   const filteredExpenses = props.items.filter(expenses=>{
    return expenses.date.getFullYear().toString()===filteredYear;
   })
  return (
     <div>
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear}
       onChangeFilter={filtereChangeHandler}
        />
        {filteredExpenses.length===0 ? (<p>No expenses found.</p>
        ):(
        filteredExpenses.map((expense)=>(
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date= {expense.date}
        />
      ))
        )}
      
      
    </Card>
    </div>
  );
}

export default Expenses
