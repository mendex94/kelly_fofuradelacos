import BannerCatalogo from "../../components/BannerCatalogo"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Row from "../../components/Row"

function Catalog() {
  return (
    <div className='bg-bege-100'>
      <Header />
      <BannerCatalogo />
      <Row />
      <Row />
      <Row />
      <Row />
      <Footer />
    </div>
  )
}

export default Catalog