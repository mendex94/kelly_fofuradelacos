import LogoHeader from '../LogoHeader';
import CartLogo from '../../assets/carrinhobtn.png'
import {Link} from 'react-router-dom'
import { MenuOutlined } from '@material-ui/icons';
import { useState } from 'react';
import MenuItems from '../MenuItems';
import '../../index.css'

function Header() {

  const [active,setActive] = useState(false)

  const showMenu = () => {
      setActive(!active)
  }

  return (
    <header className='flex h-[150px] w-full justify-start md:justify-center items-center font-fiona text-[32px] p-4 bg-[#F9F7F4]'>
      <LogoHeader/>
      <nav className='flex'>
        <div className='absolute right-6 lg:hidden top-6 scale-150'>
           <MenuOutlined className='scale-150 cursor-pointer text-rosa-200' onClick={showMenu}/>
        </div>
        <ul className='hidden lg:flex gap-[60px] text-[32px] text-preto-100 px-32'>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/catalogo'>LOJA</Link></li>
          <li><Link to='/sobre'>SOBRE NÓS</Link></li>
          <li><Link to='/suporte'>DÚVIDAS</Link></li>
          <li><button className='bg-[#BC8383] rounded-[15px] text-[#F0DDDD] hover:text-white px-5 drop-shadow-lg'>PERSONALIZADO</button></li>
        </ul>
        <button className='hidden lg:inline'><img src={CartLogo} alt="" /></button>
        <MenuItems showMenu={showMenu} active={active}/>
      </nav>
    </header>
  )
}

export default Header