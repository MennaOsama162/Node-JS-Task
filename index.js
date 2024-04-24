
////////////Lab1/////////////////////////////////////////////////////////////////////////////////////////////////////
// const fs = require('fs');
// const { json } = require('stream/consumers');
// let [, , command] = process.argv;

// if (command == "create") {
//     const [, , , task] = process.argv;
//     let Array = JSON.parse(fs.readFileSync('./todo.json', { encoding: 'utf8' }));
//     Array.push({ title: task });
//     fs.writeFileSync('./todo.json', JSON.stringify(Array));
// }
// else if(command == "list")
// {
//     let Array = JSON.parse(fs.readFileSync('./todo.json', { encoding: 'utf8' }));
//     console.log(Array)

// }
// else if(command == "delete")
// {
//     const [, , , task] = process.argv;
//     let Array = JSON.parse(fs.readFileSync('./todo.json', { encoding: 'utf8' }));
//     let i = Array.findIndex((todo)=>todo.title==task)
//     Array.splice(i,1)
//     fs.writeFileSync('./todo.json', JSON.stringify(Array));
//     console.log(Array)

// }
// else if(command == "update")
// {
//     const [, , , OldTask,NewTask] = process.argv;
//     let Array = JSON.parse(fs.readFileSync('./todo.json', { encoding: 'utf8' }));
//     let i = Array.find((todo)=>todo.title==OldTask)
//     i.title=NewTask
//     fs.writeFileSync('./todo.json', JSON.stringify(Array));
//     console.log(Array)

// }













///////////////////////////////////////////////////Lab2////////////////////////////////////////////////////////////////////

// const fs = require('fs');
// const express = require('express')
// const app= express()

// app.use(express.json())

// app.get("/todos",(req,res)=>{
//     let Array = JSON.parse(fs.readFileSync('./todo.json', { encoding: 'utf8' }));
//     res.json(Array)

// }
// )

// app.post("/todos",(req,res)=>{
// let Array = req.body
// let Array2 = JSON.parse(fs.readFileSync('./todo.json', { encoding: 'utf8' }));
// Array2.push({ title: Array });
// fs.writeFileSync('./todo.json', JSON.stringify(Array2));

// res.json(Array2)
// }
// )

// app.delete("/todos", (req, res) => {
//     let taskToDelete = req.body.title;
//     let Array = JSON.parse(fs.readFileSync('./todo.json', { encoding: 'utf8' }));
//     let index = Array.findIndex(todo => todo.title === taskToDelete);
//     if (index !== -1) {
//         Array.splice(index, 1);
//         fs.writeFileSync('./todo.json', JSON.stringify(Array));
//         res.json(Array);
//     } else {
//         res.status(404).json({ error: "Task not found" });
//     }
// });



// app.listen(3000,()=>{
//     console.log("done")
// })



 


///////////////////////////////////////////////////Lab3////////////////////////////////////////////////////////////////////

const fs = require('fs');
const express = require('express')
const app= express()
const todosRouter = require('./routes/todos')
const UserRouter = require('./routes/user')
const mongoose = require('mongoose');
const { error } = require('console');


mongoose.connect('mongodb://127.0.0.1:27017/todosDB').then(()=>{
    console.log("connected to db")
}).catch((error)=>{
    console.log(error)
})


mongoose.connect('mongodb://127.0.0.1:27017/User').then(()=>{
    console.log("connected to db")
}).catch((error)=>{
    console.log(error)
})


app.use(express.json())

app.use('/todos',todosRouter)
app.use('/User',UserRouter)




app.listen(3000,()=>{
    console.log("done")
})



