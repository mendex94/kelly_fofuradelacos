import React from "react";
import Icon1 from '../../assets/IconCardHome1.svg'
import Icon2 from '../../assets/IconCardHome2.svg'
import Icon3 from '../../assets/IconCardHome3.svg'
import Icon4 from '../../assets/IconCardHome4.svg'

function CardsRowHome() {
  return (
    <div className="container m-auto py-16">
      <p className="text-h3 text-center text-rosa-200">Nossos Diferenciais</p>
      <div className="text-center w-10/12 m-auto gap-5 flex flex-col md:flex-row">
      <div className="flex flex-col m-auto">
            <img className="m-auto relative top-[85px]" src={Icon1} alt="" />
          <div className="bg-bege-100  py-4 rounded-[10px]">
            <div className="mt-20">
              <p className="text-h5 m-3">Acessórios Artesanais</p>
              <p className="text-p3">Da costura ao bordado, feitos à mão, com amor e excelência!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
            <img className="m-auto relative top-[85px]" src={Icon2} alt="" />
          <div className="bg-bege-100  py-4 rounded-[10px]">
            <div className="mt-20">
              <p className="text-h5 m-3">Acessórios Artesanais</p>
              <p className="text-p3">Da costura ao bordado, feitos à mão, com amor e excelência!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
            <img className="m-auto relative top-[85px]" src={Icon3} alt="" />
          <div className="bg-bege-100  py-4 rounded-[10px]">
            <div className="mt-20">
              <p className="text-h5 m-3">Acessórios Artesanais</p>
              <p className="text-p3">Da costura ao bordado, feitos à mão, com amor e excelência!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
            <img className="m-auto relative top-[85px]" src={Icon4} alt="" />
          <div className="bg-bege-100  py-4 rounded-[10px]">
            <div className="mt-20">
              <p className="text-h5 m-3">Acessórios Artesanais</p>
              <p className="text-p3">Da costura ao bordado, feitos à mão, com amor e excelência!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsRowHome;
