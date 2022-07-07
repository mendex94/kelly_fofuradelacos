import { useEffect, useState } from 'react'
import { renderAcessorios, renderColecaoParis, renderDestaques, renderLacos, renderTiaras} from '../../network/apiClient'
import { Product } from '../../@types/products'

function productRequests() {
    const [lacoList, setLacoList] = useState<Product[]>([] as Product[])
    const [destaquesList, setDestaquesList] = useState<Product[]>([] as Product[])
    const [colecaoparisList, setColecaoparisList] = useState<Product[]>([] as Product[])
    const [tiarasList, setTiarasList] = useState<Product[]>([] as Product[])
    const [acessoriosList, setAcessoriosList] = useState<Product[]>([] as Product[])
    useEffect(() => {
        renderLacos().then(products => setLacoList(products))
      }, [])
      useEffect(() => {
        renderDestaques().then(products => setDestaquesList(products))
      }, [])
      useEffect(() => {
        renderColecaoParis().then(products => setColecaoparisList(products))
      }, [])
      useEffect(() => {
        renderTiaras().then(products => setTiarasList(products))
      }, [])
      useEffect(() => {
        renderAcessorios().then(products => setAcessoriosList(products))
      }, [])
      return {
        lacoList,
        destaquesList,
        colecaoparisList,
        tiarasList,
        acessoriosList
      }
}

export default productRequests