const express = require("express");
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7777@Jesus',
    database: 'Todos'
})

const PORT = 9000;

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log("MySql Database Connection Established Successfully!");
})

app.get('/CreateDB', (req, res) => {
    let sql = "CREATE DATABASE Todos";
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send("New Database Created Successfully"); 
        console.log("New Database Created Successfully!")
    })
})

app.get('/CreateTable', (req, res) => {
    let sql = "CREATE TABLE todos (id INT AUTO_INCREMENT, text VARCHAR(30), isCompleted BOOLEAN, PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send("New Table Created Successfully"); 
        console.log("Todos Table Created Successfully!")
    })
})

app.get('/addTodo', (req, res) => {
    let post = {text: 'First Post', isCompleted: false};
    let sql = "INSERT INTO todos SET ?";
    db.query(sql,post, (err, result) => {
        if(err) {
            throw err;
        }
        res.send("Data Inserted Successfully"); 
        console.log("First Record Inserted in the Table Successfully!")
    })
})

// app.get('/InsertRow2', (req, res) => {
//     let post = {text: 'Second Post', isCompleted: false};
//     let sql = "INSERT INTO todos SET ?";
//     db.query(sql,post, (err, result) => {
//         if(err) {
//             throw err;
//         }
//         res.send("Data Inserted Successfully"); 
//         console.log("Second Record Inserted in the Table Successfully!")
//     })
// })

app.get('/allTodos', (req, res) => {
    let sql = "SELECT * FROM todos";
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send("Data Selection Executed Successfully"); 
        console.log(result)
    })
})

app.get('/allTodos/:id', (req, res) => {
    let sql = `SELECT * FROM todos WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send("Data Selection Executed Successfully"); 
        console.log(result)
    })
})

app.get('/UpdateTodo/:id', (req, res) => {
    let newText = "This is new text";
    let sql = `UPDATE todos SET text = '${newText}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send("Updated Row Successfully!"); 
        console.log(result)
    })
})

app.get('/DeleteTodo/:id', (req, res) => {
    let sql = `DELETE FROM todos WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send("Row Deleted Successfully!"); 
        console.log(result)
    })
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})



