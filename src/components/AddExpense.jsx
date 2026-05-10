import { useState } from "react"
import Expense from "./ExpenseList"
import SummaryPanel from "./SummaryPanel"
import CurrencyConverter from "./CurrencyConverter"

export default function AddExpense(){
    const [expenseName, setExpenseName] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("Food")
    const[expenses, setExpense] = useState([])

    function handleSubmit(e){
        e.preventDefault()

        const data = {
            expenseName,
            amount,
            category
        }

        setExpense([...expenses, data])

        setExpenseName("")
        setAmount("")
        setCategory("Food")

    }
    return <div className="flex justify-center bg-white">
        <div className="w-full max-w-md  h-screen">
        <div className=" border border-gray-200 shadow-xs text-center rounded-md mt-10">
        <div className="ml-4 mt-4">
        <div className="text-3xl font-hero italic">
            Add Expense
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mt-4">
        <label className="font-display">
           <span className="text-md px-3 mr-20">
            Expense Name: 
           </span>
           <br /> 
           <input
           className="font-display outline-none py-1 bg-[#F5F5F5] border border-gray-200 rounded-md placeholder:text-center text-sm  text-center" 
           type="text" 
           onChange={e => setExpenseName(e.target.value)} 
           value={expenseName} 
           placeholder="e.g. Team lunch, Flight "/> 
        </label>
        </div>
        <div className="mt-3">
        <label className="font-display">
            <span className="text-md px-12 mr-32">
            Amount: 
           </span> 
           <br />
            <input 
            className="font-display outline-none py-1 bg-[#F5F5F5] border border-gray-200 rounded-md placeholder:text-center text-sm text-center" 
            type="number" 
            value={amount} 
            onChange={e => setAmount(e.target.value)} placeholder="0.00" />
        </label>
        </div>
        <div className="mt-3">
        <label className="font-display">
            <span className="text-md px-12 mr-32">
            Category: 
           </span>  
           <br />
            <select
            className="font-display outline-none px-13 py-1 bg-[#F5F5F5] border border-gray-200 rounded-md text-sm text-center"
            value={category} 
            onChange={e => setCategory(e.target.value)}>
            <option value="Food" className="text-center">
                Food
            </option>
            <option value="Travel">
                Travel
            </option>
            <option value="Marketting">
                Marketting
            </option>
            <option value="Utilities">
                Utilities
            </option>
            <option value="Other">
                Other
            </option>
            </select>
        </label>
        </div>
        <div className="mt-10 mb-15">
          <button className="bg-[#6ABF3C] py-2 font-display px-10 rounded-md" type="submit"> + Add Expense</button>
        </div>
        </form>
        </div>
        </div>
        <CurrencyConverter expenses={expenses} />
        <Expense expenses={expenses} setExpense={setExpense} />
        <SummaryPanel expenses={expenses}/>
        </div>
    </div>
}

