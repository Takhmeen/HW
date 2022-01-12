import React from 'react';
import './Expense.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expense(props) {
  
    return(
     <div>
     {props.expenses.map((el, id)=>{
         return (
        <Card className="expenses">
         <ExpenseItem
         title={el.title}
         amount={el.amount}
         date={el.date}
         key={id}
         />
        </Card>
         )
     })}
     </div>
       
    )
}
export default Expense