//all the knex functions, such as, .select()/.where()/.update()/.insert()

module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id) // this returns an array
  .first()
}

function addUser (name) {
  
}
