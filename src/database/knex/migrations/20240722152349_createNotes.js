
exports.up = kenex => kenex.schema.createTable("notes", table =>{
    table.increments("id");
    table.text("title");
    table.text("description");
    table.integer("user_id").references("id").inTable("users");
    table.timestamp("created_at").default(kenex.fn.now());
    table.timestamp("updated_at").default(kenex.fn.now());
});


exports.down = kenex => kenex.schema.dropTable("notes");