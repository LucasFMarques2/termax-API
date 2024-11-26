exports.up = knex => 
    knex.schema.createTable("abastecimento", table => {
      table.increments("id"); 
      table.text("carro"); 
      table.text("motorista"); 
      table.text("obra_destino");
      table.text("combustivel"); 
      table.float("qtd_litros");
      table.float("valor"); 
      table.integer("user_id").references("id").inTable("users").onDelete("CASCADE"); 
      table.timestamp("created_at").default(knex.fn.now()); 
      table.timestamp("updated_at").default(knex.fn.now()); 
    });
  
  exports.down = knex => knex.schema.dropTable("abastecimento");
  