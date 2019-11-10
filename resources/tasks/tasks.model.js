import db from '../../data/dbConfig';

export const getAll = () => {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 'p.name', 't.description', 't.notes', 't.is_completed');
};

export const getByProjectId = id => {
  return db('tasks as t')
    .where('project_id', '=', id)
    .select('t.id', 't.description', 't.notes', 't.is_completed');
};

export const getByTaskId = id => {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .where('t.id', '=', id)
    .select('t.id', 'p.name', 't.description', 't.notes', 't.is_completed');
};

export const getContextByTaskId = id => {
  return db('context_tasks as ct')
    .join('contexts as c', 'c.id', 'ct.context_id')
    .groupBy('c.name')
    .where('ct.task_id', '=', id)
    .select('c.name');
};
