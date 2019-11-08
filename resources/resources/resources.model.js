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
