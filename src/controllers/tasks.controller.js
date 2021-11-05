const {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require('../services/tasks.services');

const getTasksCtrl = async (req, res, next) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// eslint-disable-next-line consistent-return
const getTaskCtrl = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const task = await getTaskById(id);
    if (task === undefined) {
      return res.status(404).json({ message: 'No se encrontró la tarea' });
    }
    res.json(task);
  } catch (error) {
    next(error);
  }
};

const postTaskCtrl = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { title, description, due_date, created_at } = req.body; // Desestructuramos

  try {
    const newTask = {
      title,
      description,
      due_date,
      created_at,
      completed: false,
    };
    // Enviamos la tarea al servicio
    const response = await addTask(newTask);

    res
      .status(201)
      .json({
        task: response,
        message: 'Se ha agregado la tarea en el sistema',
      });
  } catch (error) {
    next(error);
  }
};

const putTaskCtrl = async (req, res, next) => {
  const { id } = req.params; // Desestructuramos
  try {
    const task = req.body;
    // Enviamos la tarea al servicio
    const response = await updateTask(parseInt(id, 10), task);

    res.status(204).json({
      task: response,
      message: 'Se ha actualizado la tarea en el sistema',
    });
  } catch (error) {
    next(error);
  }
};

const deleteTaskCtrl = async (req, res, next) => {
  const { id } = req.params; // Desestructuramos
  try {
    // Enviamos la tarea al servicio
    await deleteTask(parseInt(id, 10));
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasksCtrl,
  getTaskCtrl,
  postTaskCtrl,
  putTaskCtrl,
  deleteTaskCtrl,
};
