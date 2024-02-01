const connection = require('../models/connection');

const createPromise = async(req, res)=>{
    const {title} = req.body;
    
    try{
        const dateUTC = new Date(Date.now()).toUTCString();
        const query = 'INSERT INTO promises(title, status, created_at) VALUES (?, ?, ?)';
        const [createPromise] = await connection.execute(query, [title, 'pending', dateUTC]);
        return res.status(201).json({insertId: createPromise.insertId});
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = createPromise;