import { Close } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import CartLogo from '../../assets/carrinhobtn.png'
import '../../index.css'

interface MenuItemsProps {
    showMenu: () => void;
    active: boolean;
}

const MenuItems = ({ showMenu, active }: MenuItemsProps) => {
    return (
        <ul className={active ? 'flex-col z-50 flex items-center fixed inset-0 left-1/4 uppercase bg-[#EAE6E3]/40 backdrop-blur-lg gap-8 justify-center p-8 lg:hidden' : 'hidden'}>
            <Close onClick={showMenu} className='cursor-pointer' />
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/catalogo'>LOJA</Link></li>
            <li><Link to='/sobre'>SOBRE NÓS</Link></li>
            <li><Link to='/suporte'>DÚVIDAS</Link></li>
            <li><button className='bg-[#BC8383] rounded-[15px] text-[#F0DDDD] hover:text-white md:px-5 drop-shadow-lg'>PERSONALIZADO</button></li>
            <li><button className='flex row items-center'>CARRINHO<img src={CartLogo} alt="" /></button></li>
        </ul>
    );
};

export default MenuItems;