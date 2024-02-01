const connection = require('../models/connection');

const deletePromise = async(req, res)=>{
    const {id} = req.params;

    try{
        const findingPromise = await connection.execute('SELECT * FROM promises WHERE id = ?', [id]);
        if(findingPromise[0].length === 0 ){
            return res.status(404).json({message: 'id not found'});
        }
        const query = 'DELETE FROM promises WHERE id = ?';
        const [promise] = await connection.execute(query, [id]);
        return res.status(204).json();
    }catch(error){
        return res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = deletePromise;