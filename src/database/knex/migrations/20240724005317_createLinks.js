
exports.up = kenex => kenex.schema.createTable("links", table =>{
    table.increments("id");
    table.text("url").notNullable();
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.timestamp("created_at").default(kenex.fn.now())
});


exports.down = kenex => kenex.schema.dropTable("links");