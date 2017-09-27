exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('photo')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
