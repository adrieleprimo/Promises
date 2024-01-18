const tasksModel = require('../models/tasksModel');

const getAll = async(req, res)=>{

    try{
        const [tasks] = await tasksModel.getAll();
    return res.status(200).json(tasks);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Internal error server'});
    }
};

const createTask = async(req, res)=>{
    const createdTask  = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

module.exports = {
    getAll,
    createTask
};