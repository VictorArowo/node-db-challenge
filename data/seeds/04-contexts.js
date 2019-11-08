exports.seed = function(knex) {
  return knex('contexts').insert([
    {
      name: 'In Kitchen'
    },
    {
      name: 'On Construction Site'
    }
  ]);
};
