const express = require('express');
const{ getExpenses, CreateExpense, DeleteExpense } = require('../controller/expense');
const router = express.Router();

router.get('/', getExpenses);
router.post('/', CreateExpense);
router.delete('/:id', DeleteExpense);
module.exports = router;