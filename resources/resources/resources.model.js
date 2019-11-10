import db from '../../data/dbConfig';

export const getAll = () => {
  return db('resources');
};

export const getOne = id => {
  return db('resources').where('id', '=', id);
};

export const postOne = async body => {
  let [id] = await db('resources').insert(body);
  return getOne(id);
};

export const getResourceByProjectId = id => {
  return db('project_resources as pr')
    .join('resources as r', 'r.id', 'pr.resource_id')
    .join('projects as p', 'p.id', 'pr.project_id')
    .select('r.id', 'r.name', 'r.description')
    .where('p.id', '=', id);
};
