import { TailSpin } from "react-loader-spinner"
import { useSelector } from "react-redux"
import { Product } from "../../@types/products"
import BannerCatalogo from "../../components/BannerCatalogo"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Row from "../../components/Row"
import { RootStore } from "../../store"


function Catalog() {
  const products = useSelector((state: Product[]) => state.products)
  const productsStatus = useSelector((state: RootStore) => state.products.status)

  return (
    <div className='bg-bege-100'>
      <Header />
      {productsStatus !== 'fulfilled' ? (
        <div className='h-screen flex justify-center items-center'>
          < TailSpin color='#BC8383' width='100' height='100'/>
        </div>
      ) : (
        <>
        <BannerCatalogo title='Loja' frase="Consulte nosso catalogo feito com cuidado e amor para você!"/>
        <Row title='Laços' product={products.lacoList}/>
        <Row title='Destaques' product={products.destaquesList}/>
        <Row title='Tiaras' product={products.tiarasList}/>
        <Row title='Boinas' product={products.colecaoparisList}/>
        <Row title='Outros acessórios' product={products.acessoriosList}/>
        </>
      )}
      <Footer />
    </div>
  )
}

export default Catalog