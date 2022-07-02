import LogoHeader from '../LogoHeader';
import CartLogo from '../../assets/carrinhobtn.png'
import { Link } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import MenuItems from '../MenuItems';
import '../../index.css'

function Header() {

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
        <button className='hidden lg:flex items-center gap-4'>CARRINHO <img src={CartLogo} alt="" /></button>
      </div>
    </header>
  )
}

export default Header