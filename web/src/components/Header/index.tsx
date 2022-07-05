import LogoHeader from '../LogoHeader';
import CartLogo from '../../assets/carrinhobtn.png'
import { Link } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useEffect, useState } from 'react';
import MenuItems from '../MenuItems';
import '../../index.css'
import { useDispatch, useSelector } from 'react-redux'
import store, { RootStore } from '../../store';
import cart, { getTotals } from '../../store/modules/cart';


function Header() {
  store.dispatch(getTotals())
  const { cartTotalQuantity } = useSelector((state: RootStore) => state.cart)
  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <header className='w-full font-montserrat text-[18px] bg-[#F9F7F4] py-4'>
      <div className='container mx-auto flex items-center justify-between my-0'>
        <div className='flex items-center gap-20'>
          <LogoHeader />
          <nav className='flex justify-between'>
            <div className='absolute right-6 lg:hidden top-6 scale-150'>
              <MenuOutlinedIcon className='scale-150 cursor-pointer text-rosa-200' onClick={showMenu} />
            </div>
            <ul className='hidden lg:flex gap-14 text-[18px] text-preto-100 tracking-wider leading-3'>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/catalogo'>LOJA</Link></li>
              <li><Link to='/personalize'>PERSONALIZADO</Link></li>
              <li><Link to='/sobre'>SOBRE NÓS</Link></li>
              <li><Link to='/suporte'>DÚVIDAS</Link></li>
            </ul>
            <MenuItems showMenu={showMenu} active={active} />
          </nav>
        </div>
        <Link to='/carrinho' className='hidden lg:flex items-center gap-3'>CARRINHO <img src={CartLogo} alt="" /><span className='text-p5 text-bege-100 relative right-8 bottom-3 w-5 h-5 bg-preto-100 rounded-full text-center'>{cartTotalQuantity}</span></Link>
      </div>
    </header>
  )
}

export default Header