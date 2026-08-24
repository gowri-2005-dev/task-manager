const express = require("express");
const app = express();
app.use(express.json());
const tasks = [];
app.get("/tasks", (req, res) => {
    res.send(tasks);
});
app.post("/tasks", (req, res) => {
    tasks.push({ id: tasks.length +1,
        name: req.body.name});
    res.send("tasks added successfully");
});
app.put("/tasks/:id", (req,res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task=> task.id === id);
    if(!id){
        res.send ("task not found");
    }
    task.name = req.body.name;
    res.send("tasks updated successfully")
})
app.delete("/tasks/:id", (req,res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex(task=> task.id === id);
    tasks.splice(index, 1);
    res.send("task deleted successfully");
})
app.listen(3000, () => {
    console.log("server running on port 3000");
});