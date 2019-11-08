import { getAll } from './tasks.model';

export const getAllTasks = async (req, res) => {
  try {
    let tasks = await getAll();
    return res.status(200).json(tasks);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};
