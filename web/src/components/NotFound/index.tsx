import { Link } from "react-router-dom"
import NotFoundIcon from '../../assets/404icon.png'

function NotFound() {
  return (
    <div className='bg-bege-100 h-screen'>
      <div className='container mx-auto flex flex-col items-center gap-14'>
        <div>
        <h1 className='text-preto-100 text-h1 font-bold text-left'>Sinto muito.</h1>
        <p className='text-preto-100 text-h4 font-semibold' >nós não encontramos a página que você estava procurando</p>
        <p className='text-preto-100 text-h4 font-semibold' >Por que não volta e olha nossa <Link to="/catalogo" className='underline underline-offset-1'>loja?</Link></p>
        </div>
        <img src={NotFoundIcon} alt="" />
      </div>
    </div>
  )
}

export default NotFound