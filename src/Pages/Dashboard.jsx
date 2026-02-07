import  Revenue  from "../Components/Revenue"
import  Expenses  from "../Components/Expenses"
import  Profit  from "../Components/Profit"
import ExpenseList from "../Components/ExpenseList"
import Admin from "../Components/Admin"
import HistoryTable from "../Components/HistoryTable"
import Backbtn from "../Components/BackBtn"
import DashboardChart from "../Components/DashboardChart"
import ExpensePieChart from "../Components/PieChartExpenses"


function Dashboard({ records,setSubmitted, deleterecords, setEditingRecord}) {
  if (!records || records.length === 0) {
    return <div>No records to show</div>;
  }

  const latestRecord = records[records.length - 1];
  const { quantitySold, productPrice, revenue, totalExpenses, profit, expenses } = latestRecord;

  return (
    <div className="dashboard">
      <div className="heading">Welcome Back to Your Dashboard</div> <Backbtn setSubmitted={setSubmitted}/>
      <div className="box1">
        <Admin quantitySold={quantitySold} productPrice={productPrice} />
        <div className="box3">
          <Revenue revenue={revenue} />
          <Expenses totalExpenses={totalExpenses} />
          <Profit profit={profit} />
        </div>
        <ExpenseList expenses={expenses} />
      </div>
      <div className="charts">
          <DashboardChart records={records}/>
          <ExpensePieChart expenses={expenses}/>
      </div>
      <HistoryTable records ={records} deleterecords={deleterecords} onEditRecord={setEditingRecord} setSubmitted={setSubmitted}/>



    </div>
  );
}


export default Dashboard