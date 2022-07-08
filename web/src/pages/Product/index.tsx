import CommentSection from "../../components/CommentSection"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProductItem from "../../components/ProductItem"
import Row from "../../components/Row"
import productRequests from "../../hooks/productsHooks/productRequests"

function Product() {
  const {
    destaquesList
  } = productRequests();
  
  return (
    <div>
      <Header />
      <ProductItem />
      <Row title='Você também pode gostar...' product={destaquesList}/>
      <CommentSection />
      <Footer />
    </div>
  )
}

export default Product