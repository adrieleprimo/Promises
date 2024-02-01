const connection = require('../models/connection');

const updatePromise = async (req, res)=>{
    const {id} = req.params;
    const {title, status} = req.body;

    try{
        const findingPromise = await connection.execute('SELECT * FROM promises WHERE id = ?', [id]);
        if(findingPromise[0].length === 0){
            return res.status(404).json({message: 'id not found'});
        }
        const query = 'UPDATE promises SET title = ?, status = ? WHERE id = ?';
        const [promise] = await connection.execute(query, [title, status,id]);
        return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = updatePromise;