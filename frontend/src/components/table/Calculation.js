export const Calculation = (rows, pastDate) => {
    let totalIncome = 0;
    let totalExpense = 0;

    const todayDate = new Date();
    let thatDay = new Date();

    
    if (pastDate === 'Last 7 Days') {
        thatDay.setDate(thatDay.getDate() - 7); 
    } else if (pastDate === 'Last Month') {
        thatDay.setMonth(thatDay.getMonth() - 1); 
    } else if (pastDate === 'Last 3 Months') {
        thatDay.setMonth(thatDay.getMonth() - 3); 
    } else if (pastDate === 'Last Year') {
        thatDay.setFullYear(thatDay.getFullYear() - 1); 
    }

    rows.forEach((row) => {
        const rowDate = new Date(row.date);
        
        if (rowDate >= thatDay && rowDate <= todayDate) {
            if (row.category === 'income') {
                totalIncome += row.price;
            } else if (row.category === 'expense') {
                totalExpense += row.price;
            }
        }
        
        else if(pastDate==='today' && rowDate.getDate() === todayDate.getDate()){
            if (row.category === 'income') {
                totalIncome += row.price;
            } else if (row.category === 'expense') {
                totalExpense += row.price;
            }
        }
    });

    return { totalIncome, totalExpense };
}
