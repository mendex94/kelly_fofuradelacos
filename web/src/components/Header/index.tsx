import LogoHeader from '../LogoHeader';
import CartLogo from '../../assets/carrinhobtn.png'
import { Link } from 'react-router-dom'
import { MenuOutlined } from '@material-ui/icons';
import { useState } from 'react';
import MenuItems from '../MenuItems';
import '../../index.css'

function Header() {

  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <header className='h-[150px] w-full font-fiona text-[32px] p-4 bg-[#F9F7F4]'>
      <div className='container mx-auto h-[150px] flex items-center justify-between'>
        <LogoHeader />
        <nav className='flex justify-between'>
          <div className='absolute right-6 lg:hidden top-6 scale-150'>
            <MenuOutlined className='scale-150 cursor-pointer text-rosa-200' onClick={showMenu} />
          </div>
          <ul className='hidden lg:flex gap-[120px] text-[32px] text-preto-100 px-32'>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/catalogo'>LOJA</Link></li>
            <li><Link to='/sobre'>SOBRE NÓS</Link></li>
            <li><Link to='/suporte'>DÚVIDAS</Link></li>
            <li><button className='bg-[#BC8383] rounded-[15px] text-[#F0DDDD] hover:text-white px-5 drop-shadow-lg'>PERSONALIZADO</button></li>
          </ul>
          <MenuItems showMenu={showMenu} active={active} />
        </nav>
        <button className='hidden lg:inline'><img src={CartLogo} alt="" /></button>
      </div>
    </header>
  )
}

export default Header