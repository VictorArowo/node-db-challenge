import { getAll, postOne, addTask } from './projects.model';

export const getAllProjects = async (req, res) => {
  try {
    let projects = await getAll();
    return res.status(200).json(projects);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};

export const createProject = async (req, res) => {
  const { name, description } = req.body;

  try {
    let project = await postOne({
      name,
      description
    });
    return res.status(201).json(project);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};

export const createTask = async (req, res) => {
  const { id } = req.params;
  const { description, notes } = req.body;
  try {
    let task = await addTask(id, { description, notes });
    return res.status(201).json(task);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};
