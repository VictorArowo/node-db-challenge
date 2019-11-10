exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      project_id: 1,
      description: 'Get some sand'
    },
    {
      project_id: 1,
      description: 'Get some cement'
    },
    {
      project_id: 1,
      description: 'Get some water'
    },
    {
      project_id: 1,
      description: 'Mix them together'
    },
    {
      project_id: 1,
      description: 'Boom!! You have yourself a house'
    },
    {
      project_id: 2,
      description: 'Get some ingredients'
    },
    {
      project_id: 2,
      description: 'Get a pot'
    },
    {
      project_id: 2,
      description: 'Boom!! You have yourself some food'
    }
  ]);
};
