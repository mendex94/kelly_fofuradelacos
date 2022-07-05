import { useEffect, useState } from 'react'
import { renderLacos} from '../../network/apiClient'
import { Product } from '../../@types/products'

function productRequests() {
    const [productList, setProductList] = useState<Product[]>([] as Product[])
    useEffect(() => {
        renderLacos().then(products => setProductList(products))
      }, [])

      return {
        productList
      }
}

export default productRequests