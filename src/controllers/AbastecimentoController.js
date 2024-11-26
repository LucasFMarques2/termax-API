const knex = require("../database/knex");

class abastecimentoController {
  async create(request, response) {
    const user_id = request.user.id;
    const user = await knex("users").select("name").where({ id: user_id }).first();
    const motorista = user.name;
    
    const { carro,obra_destino, combustivel,qtd_litros, valor } = request.body;

    const [abastecimento_id] = await knex("abastecimento").insert({
      carro,
      motorista,
      obra_destino,
      combustivel,
      qtd_litros,
      valor,
      user_id,
    });

    response.status(201).json({ abastecimento_id });
  }

  async show(request, response) {
    const { id } = request.params;

    const abastecimento = await knex("abastecimento").where({ id }).first();

    return response.json(abastecimento);
  }

  async index(request, response) {
    const { user_id } = request.query;

    const query = knex("abastecimento");

    if (user_id) {
      query.where({ user_id });
    }

    const abastecimentos = await query;

    return response.json(abastecimentos);
  }

  async delete(req, res) {
    const { id } = req.params;

    await knex("abastecimento").where({ id }).delete();

    return res.status(200).json({ message: "Registro deletado com sucesso" });
  }
}

module.exports = abastecimentoController;
