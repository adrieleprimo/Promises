const tasksModel = require('../models/tasksModel');

const getAll = async(req, res)=>{

    try{
        const tasks = await tasksModel.getAll();
    return res.status(200).json(tasks);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Internal error server'});
    }
};

module.exports = {
    getAll
};