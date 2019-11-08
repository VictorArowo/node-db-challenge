import { getAll, getByTaskId, getContextByTaskId } from './tasks.model';

export const getAllTasks = async (req, res) => {
  try {
    let tasks = await getAll();
    tasks.forEach(task => {
      task.completed = task.is_completed ? true : false;
      delete task.is_completed;
    });
    return res.status(200).json(tasks);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getByTaskId(id);
    const contexts = await getContextByTaskId(id);

    task[0].contexts = contexts;
    res.status(200).json(task[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};
