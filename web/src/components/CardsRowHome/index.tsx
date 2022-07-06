import React from "react";
import Icon1 from '../../assets/IconCardHome1.svg'
import Icon2 from '../../assets/IconCardHome2.svg'
import Icon3 from '../../assets/IconCardHome3.svg'
import Icon4 from '../../assets/IconCardHome4.svg'

function CardsRowHome() {
  return (
    <div className="container m-auto py-16">
      <p className="text-[44px] font-semibold text-center text-rosa-200">Nossos Diferenciais</p>
      <div className="text-center w-10/12 m-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row">
      <div className="flex flex-col m-auto">
            <img className="m-auto relative w-[80px] top-[55px]" src={Icon1} alt="" />
          <div className="bg-bege-100 px-2 pt-14 pb-4 rounded-[10px] h-[200px] lg:h-[190px]">
            <div>
              <p className="text-[18px] font-semibold m-3">Acessórios Artesanais</p>
              <p className="text-[16px]">Da costura ao bordado, feitos à mão, com amor e excelência!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
            <img className="m-auto relative w-[80px] top-[55px]" src={Icon2} alt="" />
          <div className="bg-bege-100 px-2 pt-14 pb-4 rounded-[10px] h-[200px] lg:h-[190px]">
            <div>
              <p className="text-[18px] font-semibold m-3">Artigos Exclusivos</p>
              <p className="text-[16px]">Para ocasiões especiais. Você idealiza seu look e nós realizamos!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
            <img className="m-auto relative w-[80px] top-[55px]" src={Icon3} alt="" />
          <div className="bg-bege-100 px-2 pt-14 pb-4 rounded-[10px] h-[200px] lg:h-[190px]">
            <div>
              <p className="text-[18px] font-semibold m-3">Peças Atemporais</p>
              <p className="text-[16px]">Moda para o seu dia a dia. Combinam com o básico e o sofisticado!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
            <img className="m-auto relative w-[80px] top-[55px]" src={Icon4} alt="" />
          <div className="bg-bege-100 px-2 pt-14 pb-4 rounded-[10px] h-[200px] lg:h-[190px]">
            <div>
              <p className="text-[18px] font-semibold m-3">Materiais de Qualidade</p>
              <p className="text-[16px]">Tecidos próprios, rica variedade para todos os gostos e exigências!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsRowHome;
