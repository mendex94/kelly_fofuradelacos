import { Link } from "react-router-dom"
import LacoPreto1 from '../../assets/lacopreto1.png'
import LacoPreto2 from '../../assets/lacopreto2.png'
import LacoPreto3 from '../../assets/lacopreto3.png'
import Rating from '@mui/material/Rating'

function ProductItem() {
  return (
    <div className='bg-bege-100 py-6 w-full'>
      <div className='font-fiona text-h5 text-preto-100 md:container md:mx-auto'>
        <Link to='/'>Home</Link>/<Link to='/catalogo'>Loja</Link>/<p className='inline'>Laço de Linho - Preto</p>
      </div>
      <div className='container mx-auto flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-6 lg:flex-row'>
          <div className='hidden lg:flex lg:flex-col lg:justify-between'>
            <img className='w-[465px] h-[362px]' src={LacoPreto1} alt="" />
            <img className='w-[465px] h-[362px]' src={LacoPreto2} alt="" />
          </div>
          <img className='' src={LacoPreto3} alt="" />
        </div>
        <div className='font-fiona text-black-100 mx-auto'>
          <h2 className='text-h2'>Laço Preto</h2>
          <Rating name="read-only" value={1} readOnly style={{ color: '#BC8383' }} size='large' />
          <div className='font-raleway mb-[76px]'>
          <p className='text-p4 text-preto-100 max-w-[400px] leading-relaxed mt-9'>Nosso laço é leve, confortável e delicado para deixar o seu look muito
                                                                                mais interessante. Feito em linho de alta qualidade, este delicado laço
                                                                                pode ser usado no coque, no rabo de cavalo e em diversos penteados
                                                                                criativos. Vai do casual ao elegante sem esforço algum.</p>

                                                                                
          <p className='text-p4 text-preto-100 max-w-[400px] leading-relaxed my-3'>Largura do laço: 15 cm</p>

          
          <p className='text-p4 text-preto-100 max-w-[400px] leading-relaxed'>Todas as nossas peças são feitas à mão uma a uma, podendo sofrer
            pequenas variações. São modelos exclusivos, feitos somente para
            você!</p>
          </div>
          <div>
            <h3 className='text-h3 text-preto-100'>Materiais utilizados</h3>
            <div className='flex font-raleway text-preto-100 text-p3 gap-5'>
              <p className='w-36 rounded-[20px] text-center drop-shadow-lg bg-rosa-300'>Linho</p>
              <p className='w-36 rounded-[20px] text-center drop-shadow-lg bg-rosa-300'>Pedraria</p>
            </div>
            <h3 className='text-h3 text-preto-100'>R$ 38,00</h3>
          </div>
          <button className='font-raleway font-p2 font-bege-200 bg-rosa-200 w-[400px] h-20 rounded-2xl text-bege-100'>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem