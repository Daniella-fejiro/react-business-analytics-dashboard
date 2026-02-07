import { useEffect, useState } from "react"

function FormComponent({setProductPrice,productPrice,quantitySold,setQuantitySold,expenses,setExpenses,setSubmitted,setRecords,records,editingRecord,setEditingRecord}){

    const[expenseAmount, setExpenseAmount] = useState("")
    const[expenseName, setExpenseName] = useState("")
    const[date, setDate] = useState("")

    useEffect(() => {
        if (editingRecord) {
            setProductPrice(editingRecord.productPrice);
            setExpenses(editingRecord.expenses);
            setQuantitySold(editingRecord.quantitySold);
            setDate(editingRecord.date);
        }
        }, [editingRecord]);


const handlesubmit = (e) => {
    
  e.preventDefault();

  const revenue = quantitySold * productPrice;
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const profit = revenue - totalExpenses;

  if (editingRecord) {
    setRecords(prev =>
      prev.map(record =>
        record.id === editingRecord.id
          ? { ...record, productPrice, quantitySold, expenses, date, revenue, totalExpenses, profit }
          : record
      )
    );
    setEditingRecord(null);
  } else {
    setRecords(prev => [
      ...prev,
      { id: Date.now(), productPrice, quantitySold, expenses, date, revenue, totalExpenses, profit }
    ]);
  }

  setSubmitted(true);
  setProductPrice("");
  setQuantitySold("");
  setExpenses([]);
  setDate("");
};

useEffect(() => {
  if (editingRecord) {
    setProductPrice(editingRecord.productPrice);
    setQuantitySold(editingRecord.quantitySold);
    setExpenses(editingRecord.expenses);
    setDate(editingRecord.date);
  } else {
    setProductPrice("");
    setQuantitySold("");
    setExpenses([]);
    setDate("");
  }
}, [editingRecord]);

    function gotodashboard(){
        setSubmitted(true)
    }

    function addExpense(e){
        if(expenseName==="" ||expenseAmount<= 0 )
            return;
        e.preventDefault()
        setExpenses([...expenses, {name:expenseName, amount: Number(expenseAmount)}])
        setExpenseAmount("")
        setExpenseName("")
    }

    return(
        <div className="formComponent">
            <h2>Enter Dashboard Data</h2>
            <button type="button" id="backtodashboardbtn" onClick={gotodashboard}>Dashboard</button>

            <form onSubmit={handlesubmit}>

                <div className="formdata">
                    <label htmlFor="productPrice">Enter Product Price:
                    <input type="number"
                        min={1}
                        value={productPrice}
                        onChange={e => {setProductPrice(Number(e.target.value))}} />
                </label>
                </div>
                
                <div className="formdata">
                    <label htmlFor="quantitySold">Enter Quantity Sold:
                    <input type="number"
                        min={1}
                        value={quantitySold}
                        onChange={e=> {setQuantitySold(Number(e.target.value))}} />
                </label>
                </div>

                <div className="formdata">
                    <label htmlFor="date">
                        Enter Date:
                        <input type="date"
                        required
                        value={date} 
                        onChange={e =>setDate(e.target.value)}/>
                    </label>
                </div>
                
                <div className="formdata">
                    <label htmlFor="expenseName">Enter Expense Name: 
                    <input type="text"
                        value={expenseName}
                        onChange={e =>setExpenseName(e.target.value)} />
                    </label>
                </div>
                <div className="formdata">
                    <label htmlFor="expenseAmount">Enter Expense Amount:
                    <input type="number"
                        value={expenseAmount}
                        onChange={e =>setExpenseAmount(Number(e.target.value))} />
                </label>
                </div>
                <button onClick={addExpense} type="button" >Add Expense</button>

                
                <div className="formdata">
                    <h4>Current Expenses</h4>
                    <ol>
                        {expenses.map((expense, index) => (
                            <li key={index}>{expense.name}: ${expense.amount}</li>
                        ))}
                    </ol>
                </div>
                
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default FormComponent