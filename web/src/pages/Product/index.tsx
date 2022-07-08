import { useSelector } from "react-redux"
import CommentSection from "../../components/CommentSection"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProductItem from "../../components/ProductItem"
import Row from "../../components/Row"


function Product() {
  const products = useSelector((state: any) => state.products)
  
  return (
    <div>
      <Header />
      <ProductItem />
      <Row title='Você também pode gostar...' product={products.destaquesList}/>
      <CommentSection />
      <Footer />
    </div>
  )
}

export default Product