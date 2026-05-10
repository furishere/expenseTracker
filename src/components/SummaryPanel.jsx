export default function SummaryPanel({expenses}){
    const totalAmount = expenses.reduce((total, expense) => {
        return total + Number(expense.amount)
    }, 0) 

    const categoryBreakdown = expenses.reduce((cate, expense) => {

        const category = expense.category

        if (!cate[category]) {
            cate[category] = 0
        }

        cate[category] += Number(expense.amount)

        return cate

    }, {})

    return <div className="border border-gray-200 mt-8 rounded-md">
    <div className="text-2xl font-display text-center mt-4">
       Summary Panel
    </div>
        <div className="items-center border border-gray-200 rounded-md m-2 bg-[#111111] ">
            <div className="font-display text-[#727272] mt-2 ml-4">
                Total Spent
            </div>
            <div className="text-white font-display ml-4 mb-2">
                ${totalAmount}
            </div>
        </div>
        <div className="items-center border border-gray-200 rounded-md m-2 bg-[#111111] ">
        <div className="font-display text-[#727272] mt-2 ml-4">Breakdown</div>

            {Object.entries(categoryBreakdown).map(([category, total]) => (
                <div key={category}>
                    <p className="text-white font-display ml-4 mb-2">
                        {category}: ${total}
                    </p>
                </div>
            ))}
         </div>

        </div>
}