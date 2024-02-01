const connection = require('../models/connection');

const getAllPromises = async(req, res)=>{
    try{
        const [promises] = await connection.execute('SELECT * FROM promises');
        return res.status(200).json(promises);
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = getAllPromises;