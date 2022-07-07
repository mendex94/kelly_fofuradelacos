import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ContactForm from "../../components/ContactFormSupport"
import BannerCatalogo from "../../components/BannerCatalogo"
import QuestionsSection from "../../components/QuestionsSection"

function Support() {
  return (
    <div>
      <Header />
      <BannerCatalogo title='Dúvidas' frase='Ficou alguma dúvida? Comece por aqui!' />
      <QuestionsSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Support