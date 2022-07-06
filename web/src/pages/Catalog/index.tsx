import BannerCatalogo from "../../components/BannerCatalogo"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Row from "../../components/Row"
import productRequests from "../../hooks/productsHooks/productRequests"


function Catalog() {
  const {
    productList
  } = productRequests();

  return (
    <div className='bg-bege-100'>
      <Header />
      <BannerCatalogo title='Loja' frase="Consulte nosso catalogo feito com cuidado e amor para você!"/>
      <Row title='Laços' product={productList}/>
      <Footer />
    </div>
  )
}

export default Catalog