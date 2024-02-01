const validateFieldTitle = async(req, res, next)=>{
    const {body} = req;

    if(body.title === undefined){
        return res.status(400).json({message: 'The field title is required'});
    }
    if(body.title === ''){
        return res.status(400).json({message:' title cannot be empty'});
    }
    next();
};

const validateFieldStatus = async(req, res, next)=>{
    const {body} = req;

    if(body.status === undefined){
        console.log(body.status);
        return res.status(400).json({message: 'The field status is required'});
    }
    if(body.status === ''){
        return res.status(400).json({message:'status cannot be empty'});
    }
    next();
};
const  validateId =  async (req, res, next)=>{
    const id = req.params.id;

    if(isNaN(id)){
        return res.status(400).json({message: 'A valid id, please'});
    }

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
    validateId
};