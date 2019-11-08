import { getAll, postOne, addTask, getOne } from './projects.model';
import { getByProjectId } from '../tasks/tasks.model';
import { getResourceByProjectId } from '../resources/resources.model';

export const getAllProjects = async (req, res) => {
  try {
    let projects = await getAll();
    projects.forEach(project => {
      project.completed = project.is_completed ? true : false;
      delete project.is_completed;
    });
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
export const getProjectInfo = async (req, res) => {
  const { id } = req.params;
  try {
    let project = await getOne(id);
    let tasks = await getByProjectId(id);
    let resources = await getResourceByProjectId(id);

    project.completed = project.is_completed ? true : false;
    delete project.is_completed;

    tasks.forEach(task => {
      task.completed = task.is_completed ? true : false;
      delete task.is_completed;
    });

    project.tasks = tasks;
    project.resources = resources;
    return res.status(201).json(project);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};
