// import { Close } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import CartLogo from '../../assets/carrinhobtn.png'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../../index.css'

interface MenuItemsProps {
    showMenu: () => void;
    active: boolean;
}

const MenuItems = ({ showMenu, active }: MenuItemsProps) => {
    return (
        <ul className={active ? 'flex-col z-50 flex items-center fixed inset-0 left-1/4 uppercase bg-[#EAE6E3]/40 backdrop-blur-lg gap-8 justify-center p-8 lg:hidden' : 'hidden'}>
            <CloseOutlinedIcon onClick={showMenu} className='cursor-pointer' />
            <li className='hover:scale-125'><Link to='/'>HOME</Link></li>
            <li className='hover:scale-125'><Link to='/catalogo'>LOJA</Link></li>
            <li className='hover:scale-125'><Link to='/personalize'>PERSONALIZADO</Link></li>
            <li className='hover:scale-125'><Link to='/sobre'>SOBRE NÓS</Link></li>
            <li className='hover:scale-125'><Link to='/suporte'>DÚVIDAS</Link></li>
            <li><button className='flex row items-center gap-4'>CARRINHO<img src={CartLogo} alt="" /></button></li>
        </ul>
    );
};

export default MenuItems;