import { useState } from "react"
import Expense from "./ExpenseList"
import SummaryPanel from "./SummaryPanel"
import CurrencyConverter from "./CurrencyConverter"

export default function AddExpense() {
    const [expenseName, setExpenseName] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("Food")
    const [expenses, setExpense] = useState([])

    function handleSubmit(e) {
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

    return (
        <div className="min-h-screen bg-white flex justify-center px-4">
            <div className="w-full max-w-md">
                <div className="border border-gray-200 shadow-sm rounded-xl mt-6 p-6">
                    <h1 className="text-3xl font-hero italic text-center">
                        Add Expense
                    </h1>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                        <div>
                            <label className="font-display block mb-2">
                                Expense Name
                            </label>

                            <input
                                className="w-full outline-none py-2 px-3 bg-[#F5F5F5] border border-gray-200 rounded-md text-sm"
                                type="text"
                                onChange={(e) => setExpenseName(e.target.value)}
                                value={expenseName}
                                placeholder="e.g. Team lunch, Flight"
                            />
                        </div>
                        <div>
                            <label className="font-display block mb-2">
                                Amount
                            </label>

                            <input
                                className="w-full outline-none py-2 px-3 bg-[#F5F5F5] border border-gray-200 rounded-md text-sm"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                            />
                        </div>
                        <div>
                            <label className="font-display block mb-2">
                                Category
                            </label>

                            <select
                                className="w-full outline-none py-2 px-3 bg-[#F5F5F5] border border-gray-200 rounded-md text-sm"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <button
                            className="w-full bg-[#6ABF3C] py-3 rounded-md font-display"
                            type="submit"
                        >
                            + Add Expense
                        </button>
                    </form>
                </div>
                <div className="space-y-4 mt-6 pb-6">
                    <CurrencyConverter expenses={expenses} />
                    <Expense expenses={expenses} setExpense={setExpense} />
                    <SummaryPanel expenses={expenses} />
                </div>

            </div>
        </div>
    )
}