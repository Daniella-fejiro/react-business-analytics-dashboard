
export default function HistoryTable({records, deleterecords, onEditRecord,setSubmitted}) {
    return(

        <div className="historytable">
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Product Price</th>
                    <th>Quantity Sold</th>
                    <th>Revenue</th>
                    <th>Total Expenses</th>
                    <th>Profit</th>
                </tr>
                </thead>
                <tbody>
                {records.map((record) => (
                    <tr key={record.id}>
                    <td>{record.date}</td>
                    <td>${record.productPrice}</td>
                    <td>{record.quantitySold}</td>
                    <td>${record.revenue}</td>
                    <td>${record.totalExpenses}</td>
                    <td>${record.profit}</td>
                    <td><button id="deletebtn" onClick={()=> deleterecords(record.id)}>Delete </button></td>
                    <td><button id="editbtn" onClick={() => {onEditRecord(record); setSubmitted(false)}} >
  Edit
</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}