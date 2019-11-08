import db from '../../data/dbConfig';

export const getAll = () => {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 'p.name', 't.description', 't.notes', 't.is_completed');
};
