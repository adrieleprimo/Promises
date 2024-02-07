const validateFields = (schema) => async(req, res, next)=>{

    try{
        const data = await schema.validateAsync(req.body);
        req.body = data;
        next();
    }catch(error){
        return res.status(400).json({message: error.message});
    }
};

const  validateId =  async (req, res, next)=>{
    const id = req.params.id;

    if(isNaN(id)){
        return res.status(400).json({message: 'A valid id, please'});
    }

    next();
};

module.exports = {
    validateFields,
    validateId
};