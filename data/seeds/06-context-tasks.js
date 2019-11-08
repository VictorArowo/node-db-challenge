exports.seed = function(knex) {
  return knex('context_tasks').insert([
    {
      context_id: 1,
      task_id: 6
    },
    {
      context_id: 1,
      task_id: 7
    },
    {
      context_id: 1,
      task_id: 8
    }
  ]);
};
