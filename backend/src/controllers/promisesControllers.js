const promisesModel = require('../models/promisesModel');

const getAllPromises = async(req, res)=>{
    const [tasks] = await promisesModel.getAllPromises();
    return res.status(200).json(tasks);
};

const createPromise = async(req, res)=>{
    const createdTask  = await promisesModel.createPromise(req.body);
    return res.status(201).json(createPromise);
};

const deletePromise = async(req, res)=>{
    const {id} = req.params;

    if(isNaN(id)){
        return res.status(400).json({message: ' A valid id, please'});
    }
    try{
    await promisesModel.deletePromise(id);
    return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

const updatePromise = async (req, res)=>{
    const {id} = req.params;
   
    if(isNaN(id)){
        return res.status(400).json({message: ' A valid id, please'});
    }

    try{
    await  promisesModel.updatePromise(id, req.body);
    return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
  };

module.exports = {
    getAllPromises,
    createPromise,
    deletePromise,
    updatePromise
};