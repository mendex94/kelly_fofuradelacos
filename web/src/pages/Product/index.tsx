import CommentSection from "../../components/CommentSection"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProductItem from "../../components/ProductItem"
import Row from "../../components/Row"

function Product() {
  return (
    <div>
      <Header />
      <ProductItem />
      <CommentSection />
      <Footer />
    </div>
  )
}

export default Product