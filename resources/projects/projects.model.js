import db from '../../data/dbConfig';

export const getAll = () => {
  return db('projects');
};

export const getOne = id => {
  return db('projects').where('id', '=', id);
};

export const postOne = async body => {
  let [id] = await db('projects').insert(body);
  return getOne(id);
};

export const addTask = async (id, body) => {
  let [res] = await db('tasks').insert({ project_id: id, ...body });
  return { id: res, project_id: id, ...body, is_complete: 0 };
};
