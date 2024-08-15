const expenseModel = require('../models/expense');

const getExpenses = async (req, res) => {
    try{
        const allExpenses = await expenseModel.find();
        return res.status(200).json({
            data: allExpenses
        });
    } catch(error) {
        console.error('error')
    }
}

const CreateExpense = async (req, res) => {
    const expenseData = req.body;

    const expense = new expenseModel({
        name: expenseData.name,
        description: expenseData.description,
        amount: expenseData.amount,
        type: expenseData.type,
        category: expenseData.category
    });

    try {
        const savedData = await expense.save();

        if (savedData) {
            return res.status(201).json({
                message: 'Expense Successfully created',
                data: savedData
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: 'Error creating expense',
            error
        });
    }
};

const DeleteExpense = async (req, res) => {
    const expenseId = req.params.id;
    
    try {
        const existingExpense = await expenseModel.findById(expenseId);

        if (!existingExpense) {
            return res.status(404).json({
                message: "Expense not found",
                data: null
            });
        }

        await ExpenseModel.findByIdAndDelete(expenseId);
        
        return res.status(200).json({
            message: "Expense successfully deleted"
        });
    } catch (error) {
        return res.status(500).json({
            message: "There was an issue deleting the expense",
            error
        });
    }
};

module.exports = {
    getExpenses,
    CreateExpense,
    DeleteExpense
}