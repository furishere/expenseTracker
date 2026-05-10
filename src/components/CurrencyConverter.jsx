import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

export default function CurrencyConverter({ expenses }) {

    const [convert, setConvert] = useState("INR")

    const { data, loading } = useFetch(
        "https://v6.exchangerate-api.com/v6/6844a36243276afbd756188d/latest/USD"
    )

    const totalAmount = expenses.reduce((total, expense) => {
        return total + Number(expense.amount)
    }, 0)

    if (loading) {
        return <div>loading...</div>
    }

    const convertedAmount =
        totalAmount * data.conversion_rates[convert]

    return (
        <div className="border border-gray-200 mt-8 rounded-md text-center">
    <div className="text-3xl font-hero italic text-center mt-4">
       Currency Preview
    </div>
    <div className="mt-4">
            <label className="font-display">
                <span className="text-md px-10 mr-28"> Convert To:</span>
                <br />
                <select
                    className="font-display outline-none px-18 py-1 bg-[#F5F5F5] border border-gray-200 rounded-md text-center text-sm"
                    value={convert}
                    onChange={e => setConvert(e.target.value)}
                >
                    <option value="EUR">EUR</option>
                    <option value="INR">INR</option>
                    <option value="GBP">GBP</option>
                    <option value="AED">AED</option>
                    <option value="JPY">JPY</option>
                    <option value="CAD">CAD</option>
                    <option value="AUD">AUD</option>
                </select>
            </label>

            <h2 className="mb-8 mt-8  text-lg">
                {convert} : {convertedAmount.toFixed(2)}
            </h2>
        </div>
        </div>
    )
}