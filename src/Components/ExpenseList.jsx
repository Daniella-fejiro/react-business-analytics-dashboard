

export default function ExpenseList ({expenses}){
    return(
        <div className="expenselist box2">
            <h3>Expenses</h3>
            <ol className="expensecontainer">
                {expenses.map((expense, idx)=> (
                    <li key={idx}>{expense.name}: ${expense.amount}</li>
                ))}
            </ol>
        </div>
    )
}