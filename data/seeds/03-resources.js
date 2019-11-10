exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: 'Sand'
    },
    {
      name: 'Cement'
    },
    {
      name: 'Blocks'
    },
    {
      name: 'Gravel'
    },
    {
      name: 'Furniture'
    },
    {
      name: 'Pot'
    },
    {
      name: 'Ingredients'
    }
  ]);
};
