const connection = require('./connection');

const getAllPromises = async () => {
  const promises = await connection.execute('SELECT * FROM promises');
  return promises;
};

const createPromise  =async (promise) =>{
  const {title} = promise;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)';
  const [createdTask]= await  connection.execute(query, [title, 'pending', dateUTC]);
  return {insertId: createdTask.insertId};
};

const deletePromise = async (id)=>{
  const  removePromise = await connection.execute('DELETE FROM promises WHERE id = ?', [id]);
  return removePromise;
};

const updatePromise = async (id, promise)=>{
  const {title, status} = promise;
  const query = 'UPDATE  promises SET title = ?, status = ? WHERE id = ?';
  const  [updatePromise] = await connection.execute(query, [title, status, id]);
  return updatePromise;
};

module.exports = {
        getAllPromises, 
        createPromise,
        deletePromise,
        updatePromise
};