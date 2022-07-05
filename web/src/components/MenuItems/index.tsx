// import { Close } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import CartLogo from '../../assets/carrinhobtn.png'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../../index.css'
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';

interface MenuItemsProps {
    showMenu: () => void;
    active: boolean;
}

const MenuItems = ({ showMenu, active }: MenuItemsProps) => {
    const { cartTotalQuantity } = useSelector((state: RootStore) => state.cart)
    return (
        <ul className={active ? 'text-right flex-col z-50 flex items-end fixed inset-0 left-1/4 uppercase bg-[#EAE6E3]/40 backdrop-blur-lg gap-8 justify-center p-8 lg:hidden' : 'hidden'}>
            <CloseOutlinedIcon onClick={showMenu} className='cursor-pointer' />
            <li className='hover:scale-125'><Link to='/'>HOME</Link></li>
            <li className='hover:scale-125'><Link to='/catalogo'>LOJA</Link></li>
            <li className='hover:scale-125'><Link to='/personalize'>PERSONALIZADO</Link></li>
            <li className='hover:scale-125'><Link to='/sobre'>SOBRE NÓS</Link></li>
            <li className='hover:scale-125'><Link to='/suporte'>DÚVIDAS</Link></li>
            <li><Link to='/carrinho' className='flex row items-center gap-2'>CARRINHO<img src={CartLogo} alt="" /><span className='text-p5 text-bege-100 absolute right-8 bottom-[275px] w-5 h-5 bg-preto-100 rounded-full text-center'>{cartTotalQuantity}</span></Link></li>
        </ul>
    );
};

export default MenuItems;