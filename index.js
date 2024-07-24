const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.json())

gi
const todo_arr = []


app.get('/', (req, res) => {

    res.render('index.ejs', { todo_data: todo_arr, update: false })
})

app.post('/', (req, res) => {
    const body_data = req.body
    todo_arr.push(body_data['todo_item'])
    res.render('index.ejs', { todo_data: todo_arr, update: false })
})

app.put('/:id', (req, res) => {
    const body_data = req.body
    const index = req.params['id']
    if (body_data['update']) {

    } else {
        console.log("put req")
        res.render('index.ejs', { todo_data: todo_arr, update_data: todo_arr[index], update: true, index: index })
    }
})

app.delete('/:id', (req, res) => {

    const index = req.params['id']
    todo_arr.splice(index, 1)
    res.render('index.ejs', { todo_data: todo_arr, update: false })
})

app.listen(8000)

