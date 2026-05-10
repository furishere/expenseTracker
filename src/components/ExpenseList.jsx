import { useState } from "react"

export default function Expense({expenses, setExpense}){
    const [empty, setEmpty] = useState()
    return <div className="border border-gray-200 mt-8 rounded-md text-center">
    <div className="text-2xl font-display text-center mt-4">
       Expense
    </div>
    <div className="mt-2">
        {expenses.map((expense, index) => (
            <div key={index}>
                <div  className="items-center border border-gray-200 rounded-md m-2">
                <div className="flex justify-between mt-2 mr-2 mb-2">
                    <div className="ml-2">
                    <h3 className="text-sm font-display">{expense.expenseName}</h3>
                    <div className="text-xs">{expense.category}</div>
                    </div>
                    <div>
                      <p className="text-sm">${expense.amount}</p>
                      <button className="text-sm" onClick={() => {
                    setExpense(
                        expenses.filter(a => 
                            a.expenseName !== expense.expenseName
                        )
                    )
                }}> x </button>
                    </div>
                </div>
                </div>
            </div>
        ))}
    </div>
    </div>
}