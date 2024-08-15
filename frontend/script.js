document.addEventListener('DOMContentLoaded', () => {
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');
    
    const fetchExpenses = async () => {
        const response = await fetch('/expense');
        const expenses = await response.json();
        let total = 0;
        expenseList.innerHTML = '';
        expenses.data.forEach(expense => {
            const li = document.createElement('li');
            li.textContent = `${expense.name} - $${expense.amount} - ${expense.category} - ${expense.type}`;
            expenseList.appendChild(li);
            total += parseFloat(expense.amount);
        });
        totalAmount.textContent = total;
    };

    document.getElementById('submit-expense').addEventListener('click', async () => {
        const name = document.getElementById('expense-name').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;
        const type = document.getElementById('type').value;
        
        await fetch('/expense', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, category, amount, type }),
        });
        
        document.getElementById('expense-name').value = '';
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
        
        fetchExpenses();
    });

    fetchExpenses();
});
