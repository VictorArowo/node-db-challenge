exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'Build a House',
      description: 'This describes how to build a house'
    },
    {
      name: 'Cook',
      description: 'This describes how to cook some food'
    }
  ]);
};
