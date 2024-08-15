const express = require('express')
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 5500;
const expenseRoutes = require('./routes/expense')
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, )))

app.use('/expense', expenseRoutes);




mongoose.connect('mongodb+srv://kimjcob:peyPH0ywBVi3MQ78@final.mishe.mongodb.net/').then(() => {
    console.log('database connected');
}).catch((error) => {
    console.error('error')
})

app.listen(PORT, () => {
    console.log('Server running')
})
