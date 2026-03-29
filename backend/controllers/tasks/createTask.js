const Task = require("../../models/task.js");

const createTask = async (req, res) => {

    let { projectId, name, description } = req.body;
    if (!projectId || !name || !description) {
      throw new Error("Required fields missing (projectId, title)");
    }
    const newTask = await Task.create({
      projectId, name, description
    });

    if (!newTask) { throw new Error("Unable to create task");}

    res.send({status: true, message: "Task created successfully"});


};

module.exports = { createTask };