import { Link, useLocation } from "react-router-dom"
import LacoPreto1 from '../../assets/lacopreto1.png'
import LacoPreto2 from '../../assets/lacopreto2.png'
import LacoPreto3 from '../../assets/lacopreto3.png'
import Rating from '@mui/material/Rating'
import { Product } from "../../@types/products"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/modules/cart"
import MaterialPill from "../MaterialPill"

function ProductItem() {
  const location = useLocation()
  const product: Product = location.state
  console.log(product)
  const dispatch = useDispatch()
    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }
    console.log(product.Product_Albums[0].url_image)
  return ( 
    <div className='bg-bege-100 py-6 w-full'>
      <div className='font-montserrat text-h3 text-preto-100 md:container md:mx-auto mb-4'>
        <Link to='/'>Home</Link>/<Link to='/catalogo'>Loja</Link>/<p className='inline'>{product.description}</p>
      </div>
      <div className='container mx-auto flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:flex-row gap-3 w-10/12 md:w-8/12 md:m-auto'>
          <div className='hidden md:hidden lg:flex lg:flex-col gap-5 w-4/12'>
            <img className='object-cover w-[400px] h-[309px] rounded-[30px]' src={product.Product_Albums[2]?.url_image} alt="" />
            <img className='object-cover w-[400px] h-[309px] rounded-[30px]' src={product.Product_Albums[1]?.url_image} alt="" />
          </div>
          <img className='object-cover h-[634px] rounded-[30px] w-8/12' src={product.Product_Albums[0]?.url_image} alt="" />
        </div>
        <div className='text-black-100 mx-auto flex flex-col max-h-[630px] justify-between w-10/12 md:w-3/12'>
          <div>
          <h2 className={`font-montserrat font-semibold max-w-[464px] ${product.description.length < 15 ? 'text-h1' : 'text-p2'}`}>{product.description}</h2>
          <Rating name="read-only" value={product.overall_evaluation} readOnly style={{ color: '#BC8383' }} size='large' />
          <div className='mb-4'>
          <p className='text-p3 text-preto-100 max-w-[400px] leading-relaxed mt-4'>Nosso laço é leve, confortável e delicado para deixar o seu look muito
                                                                                mais interessante. Feito em linho de alta qualidade, este delicado laço
                                                                                pode ser usado no coque, no rabo de cavalo e em diversos penteados
                                                                                criativos. Vai do casual ao elegante sem esforço algum.</p>
          <p className='text-p3 text-preto-100 max-w-[400px] leading-relaxed'>Todas as nossas peças são feitas à mão uma a uma, podendo sofrer
            pequenas variações. São modelos exclusivos, feitos somente para
            você!</p>
          </div>
          <div>
            <h3 className='text-h4 font-semibold text-preto-100 leading-10'>Detalhes do produto</h3>
            <div className='flex text-preto-100 text-p3 gap-5'>
              {product.Materials.map((material) => 
                <MaterialPill material={material} key={material.id}/>
              )}
            </div>
          </div>
          </div>
          <div>
          <h3 className='text-h1 font-semibold text-preto-100'>R$ {product.price},00</h3>
          <button onClick={() => handleAddToCart(product)} className='font-montserrat text-h3 whitespace-nowrap font-bege-200 bg-rosa-200 px-9 py-3 w-full rounded-2xl text-[#FFFFFF] font-bold'>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem