import { useEffect, useState } from "react"
import FormComponent from "./Pages/Form"
import Dashboard from "./Pages/Dashboard"

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [productPrice, setProductPrice] = useState("")
  const [quantitySold, setQuantitySold] = useState("")
  const [expenses, setExpenses] = useState([])
  const [records, setRecords] = useState(()=>{
    const saved = localStorage.getItem("records")
    return saved? JSON.parse(saved) : []
  })
  const [editingRecord, setEditingRecord] = useState(null);
  useEffect(()=>{
    localStorage.setItem("records", JSON.stringify(records))
  }, [records])

    function deleterecords(id){
      const updated = records.filter(record=> record.id !== id)
      setRecords(updated)
    }

  return(
    <div>
        {!submitted? 
        (<FormComponent
          setSubmitted={setSubmitted}
          productPrice={productPrice}
          setProductPrice={setProductPrice}
          quantitySold={quantitySold}
          setQuantitySold={setQuantitySold}
          expenses={expenses}
          setExpenses={setExpenses}
          records={records}
          setRecords={setRecords}
          setEditingRecord={setEditingRecord}
          editingRecord={editingRecord}
          />) : 
          (<Dashboard records={records} 
            productPrice={productPrice} 
            quantitySold={quantitySold} 
            setSubmitted={setSubmitted} 
            deleterecords={deleterecords}
            setEditingRecord={setEditingRecord}
          />)}
    </div>
  )
}

export default App
