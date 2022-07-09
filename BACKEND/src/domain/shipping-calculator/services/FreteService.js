const ApiCorreios = require("node-correios");
const correios = new ApiCorreios();

const BASE_CEP_ORIGEM = "14061310";

const FreteService = {
  async calculaFrete(req) {
    const { sCepDestino } = req.body;
    const nCdServico = "04014";
    const sCepOrigem = BASE_CEP_ORIGEM;
    const nVlPeso = 1;
    const nCdFormato = 1;
    const nVlComprimento = 15;
    const nVlAltura = 10;
    const nVlLargura = 15;
    const nVlDiametro = 10;
    try {
      const frete = await correios.calcPreco({
        nCdServico,
        sCepOrigem,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura,
        nVlDiametro,
      });
      return await frete;
    } catch (err) {
      console.error(err);
    }
  },
};
module.exports = FreteService;
