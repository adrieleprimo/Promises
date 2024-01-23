const connection = require('./connection');

const getAllPromises = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createPromise  =async (task) =>{
  const {title} = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)';
  const [createdTask]= await  connection.execute(query, [title, 'pending', dateUTC]);
  return {insertId: createdTask.insertId};
};

const deletePromise = async (id)=>{
  const  removeTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return removeTask;
};

const updatePromise = async (id, task)=>{
  const {title, status} = task;
  const query = 'UPDATE  tasks SET title = ?, status = ? WHERE id = ?';
  const  [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

module.exports = {
        getAllPromises, 
        createPromise,
        deletePromise,
        updatePromise
};