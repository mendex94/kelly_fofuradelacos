import React from "react";
import Icon1 from "../../assets/IconCardPersonalize1.svg";
import Icon2 from "../../assets/IconCardPersonalize2.svg";
import Icon3 from "../../assets/IconCardPersonalize3.svg";
import Icon4 from "../../assets/IconCardPersonalize4.svg";
import Icon5 from "../../assets/IconCardPersonalize5.svg";
import Icon6 from "../../assets/IconCardPersonalize6.svg";

function CardsRowPersonalize() {
  return (
    <div className="container m-auto py-16">
      <p className="text-[44px] font-semibold text-center text-rosa-200">E agora? Como funciona?</p>
      <div className="text-center w-11/12 m-auto gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <div className="flex flex-col m-auto">
          <img className="m-auto w-[70px] relative top-[50px]" src={Icon1} alt="" />
          <div className="bg-bege-100 w-[180px] h-[250px] py-4 rounded-[10px]">
            <div className="m-auto py-10">
              <p className="text-[22px] font-semibold m-3">Contato</p>
              <div className="mx-3">
                <p className="text-[16px]">
                  Neste contato inicial, descreva seu acessório.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
          <img className="m-auto w-[70px] relative top-[50px]" src={Icon2} alt="" />
          <div className="bg-bege-100 w-[180px] h-[250px] py-4 rounded-[10px]">
            <div className="m-auto py-10">
              <p className="text-[22px] font-semibold m-3">Briefing</p>
              <div className="mx-3">
                <p className="text-[16px]">
                  Conte-nos mais! Como você quer seu acessório personalizado?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
          <img className="m-auto w-[70px] relative top-[50px]" src={Icon3} alt="" />
          <div className="bg-bege-100 w-[180px] h-[250px] py-4 rounded-[10px]">
            <div className="m-auto py-10">
              <p className="text-[22px] font-semibold m-3">Proposta</p>
              <div className="mx-3">
                <p className="text-[16px]">
                  Receba a proposta com descrição do acessório e o orçamento.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
          <img className="m-auto w-[70px] relative top-[50px]" src={Icon4} alt="" />
          <div className="bg-bege-100 w-[180px] h-[250px] py-4 rounded-[10px]">
            <div className="m-auto py-10">
              <p className="text-[22px] font-semibold m-3">Confirmação</p>
              <div className="mx-3">
                <p className="text-[16px]">
                  Gostou? Confirme a proposta recebida.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
          <img className="m-auto w-[70px] relative top-[50px]" src={Icon5} alt="" />
          <div className="bg-bege-100 w-[180px] h-[250px] py-4 rounded-[10px]">
            <div className="m-auto py-10">
              <p className="text-[22px] font-semibold m-3">Pagamento</p>
              <div className="mx-3">
                <p className="text-[16px]">
                  Faça o pagamento da forma como preferir. Aceitamos PIX,
                  transferência e cartões.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-auto">
          <img className="m-auto w-[70px] relative top-[50px]" src={Icon6} alt="" />
          <div className="bg-bege-100 w-[180px] h-[250px] py-4 rounded-[10px]">
            <div className="m-auto py-10">
              <p className="text-[22px] font-semibold m-3">Recebimento</p>
              <div className="mx-3">
                <p className="text-[16px]">
                  Pronto! Agora é só aguardar o recebimento do acessório na sua
                  casa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsRowPersonalize;
