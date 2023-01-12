import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
	const { budget, expenses} = useContext(AppContext);
	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	  }, 0);

	  console.log(totalExpenses)
	 
	const [budgetNew,setBudgetNew]=useState(budget);
	const handleChange = (e) =>{
		setBudgetNew(e.target.value)
		console.log(budgetNew)
		if(e.target.value>20000){
			setBudgetNew(20000);
		}

	}

	return (
		<div className='alert alert-secondary'>
			<span>Budget: {props.selectValue} 
				<input type="number" min={totalExpenses} max="20000" step="10" value={budgetNew} onChange={handleChange}/> </span>
		</div>
	);
};

export default Budget;
