exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 100).notNullable();
      tbl.string("description");
      tbl
        .boolean("completion")
        .notNullable()
        .defaultTo(false);
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("name")
        .notNullable()
        .unique();
      tbl.string("description");
    })

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completion");

      tbl
        .integer("projectID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })

    .createTable("resourcesUsed", tbl => {
      tbl
        .integer("projectID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("resourceID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resourcesUsed");
};
