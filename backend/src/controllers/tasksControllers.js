const tasksModel = require('../models/tasksModel');

const getAll = async(req, res)=>{
    const [tasks] = await tasksModel.getAll();
    return res.status(200).json(tasks);
};

const createTask = async(req, res)=>{
    const createdTask  = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

const deleteTask = async(req, res)=>{
    const {id} = req.params;

    if(isNaN(id)){
        return res.status(400).json({message: ' A valid id, please'});
    }
    try{
    await tasksModel.deleteTask(id);
    return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

const updateTask = async (req, res)=>{
    const {id} = req.params;
   
    if(isNaN(id)){
        return res.status(400).json({message: ' A valid id, please'});
    }

    try{
    await  tasksModel.updateTask(id, req.body);
    return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
  };

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};