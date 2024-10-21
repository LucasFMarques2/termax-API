const bcrypt = require('bcryptjs');

exports.up = async function(knex) {
  // Criação da tabela de usuários
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('avatar').nullable();
    table.boolean('isAdmin').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });


  const passwordHash = await bcrypt.hash('1234', 8);

  await knex('users').insert({
    name: 'Admin',
    email: 'admin@mail.com',
    isAdmin: true,
    password: passwordHash,  
    avatar: null,
    created_at: knex.fn.now(),
    updated_at: knex.fn.now(),
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
