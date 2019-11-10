exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments();

      table
        .text('name', 128)
        .unique()
        .notNullable();
      table.string('description');
      table.boolean('is_completed').defaultTo(0);
    })
    .createTable('tasks', table => {
      table.increments();
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');
      table.string('description').notNullable();
      table.string('notes');
      table.boolean('is_completed').defaultTo(0);
    })
    .createTable('resources', table => {
      table.increments();

      table
        .text('name', 128)
        .unique()
        .notNullable();

      table.string('description');
    })
    .createTable('project_resources', table => {
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');

      table
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources');
    })
    .createTable('contexts', table => {
      table.increments();

      table
        .text('name', 128)
        .unique()
        .notNullable();
    })
    .createTable('context_tasks', table => {
      table
        .integer('context_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('contexts');

      table
        .integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('context_tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('contexts')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
