import CardsRowPersonalize from "../../components/CardsRowPersonalize"
import SectionPersonalize from "../../components/SectionPersonalize"
import GalleryPersonalize from "../../components/GalleryPersonalize"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import BannerCatalogo from "../../components/BannerCatalogo"



function Custom() {
  return (
    <div>
      <Header />
      <BannerCatalogo title='Personalize' frase='Quer algo mais exclusivo? Personalize seus acessórios do seu jeitinho!' />
      <SectionPersonalize />
      <CardsRowPersonalize />
      <GalleryPersonalize />
      <Footer />
    </div>
  )
}

export default Custom