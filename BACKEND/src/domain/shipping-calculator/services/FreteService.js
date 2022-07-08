const ApiCorreios = require("node-correios");
const correios = new ApiCorreios()

const BASE_CEP_ORIGEM = "14061310";

const FreteService = {
  async calculaFrete(req) {
    const {cep} = req.body
    const cdServico = "04014"
    const cepOrigem = BASE_CEP_ORIGEM
    const pesoProduto = 1
    const formatoProduto = 1
    const comprimentoProduto = 15
    const alturaProduto = 10
    const larguraProduto = 15
    const diametroproduto = 10
    try {
      
      const frete = await correios.calcPrecoPrazo({
        cdServico,
        cepOrigem,
        cep,
        pesoProduto,
        formatoProduto,
        comprimentoProduto,
        alturaProduto,
        larguraProduto,
        diametroproduto
      })
      console.log(frete)
      return frete
    } catch (err) {
      console.error(err)
    }
  },
};
module.exports = FreteService;
