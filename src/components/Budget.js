import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    
		
    const changeBudget = (val)=>{

        const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

        if(val>20000)
        {
            alert("Budget cannot exceed 20000");
            return;
        }
        if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
            return;
		}

        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                required='required'
                type='number'
                //id='cost'
                value={budget}
                step='10'
                style={{size: 10, width:'60%'}}
                onChange={(event) => changeBudget(event.target.value)}>
            </input>


            </span>
        </div>
    );
};
export default Budget;
