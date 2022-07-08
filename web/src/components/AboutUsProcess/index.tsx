import handNiddle from '../../assets/handnniddle.png'
import meetKellyIcon from '../../assets/meetkellyicon.svg'

function AboutUsProcess() {
  return (
    <div className='bg-bege-100 lg:pt-14 pb-40'>
        <h1 className='text-center text-h1 text-rosa-200 font-semibold'>Processo</h1>
        <div className='container mx-auto mt-14 flex gap-16'>
            <img src={handNiddle} alt="" className='hidden lg:inline'/>
            <div className='px-8 max-w-6xl bg-[#FFFFFF] rounded-[30px] flex flex-col gap-9 pb-10 md:mx-0 md:pb-0 relative'>
                        <p className='leading-9 text-h4 mt-10'>
                        Nosso processo de confecção dos acessórios segue um controle de qualidade muito cuidadoso.
                        Desde a seleção e preparação dos materiais, para adequar ao nosso tipo de produto, até o delicado 
                        trabalho manual, muitas vezes demorado, de acordo com a sofisticação da peça. Só quem ama o 
                        que faz entende a dedicação e carinho em cada dobra, cada ponto, cada costura, em tudo é uma 
                        ternura que transborda. Nossas embalagens, com cherinhos e mimos são a cereja do bolo! Confira 
                        e se apaixone também!
                        </p>
                        <img src={meetKellyIcon} alt="" className='w-36 h-36 absolute right-1 -bottom-20 hidden lg:inline mr-12' />
                    </div>
        </div>
    </div>
  )
}

export default AboutUsProcess