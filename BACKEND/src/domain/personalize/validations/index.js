const { create } = require ("./sample/create");
const { getOne } = require ("./sample/getOne");
const { destroy}  = require ("./sample/destroy");
const { update } = require ("./sample/update");

const SampleValidation = {
  create,
  getOne,
  destroy,
  update,
};

module.exports = SampleValidation