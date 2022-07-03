import LogoFooter from '../LogoFooter'
import InstagramIcon from '../../assets/instagramicon.png'
import WhatsAppIcon from '../../assets/whatsappicon.png'
import GamaBadge from '../../assets/gamabadge.png'
import Securitybadge from '../../assets/securitybadge.png'
import GenericBadge from '../../assets/genericbadge.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#BC8383] w-full flex flex-col md:flex-row items-center justify-around text-[28px] font-normal text-[#F9F7F4] py-8">
      <div className='container flex md:justify-between items-center justify-center'>
        <div className='flex gap-[63px]'>
          <div className='hidden md:inline mb-'>
            <LogoFooter />
            <p className='text-p4 text-bege-100'>&copy; 2022 | All Rights Reserved.</p>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex gap-[68px]'>
              <div className='flex flex-col font-montserrat text-p3 items-center md:items-start'>
                <Link to='/sobre'>Sobre nós</Link>
                <Link to='/suporte'>Dúvidas</Link>
              </div>
              <div className='flex flex-col font-montserrat text-p3 items-center md:items-start'>
                <Link to='/catalogo'>Loja</Link>
                <Link to='/personalize'>Personalize</Link>
              </div>
            </div>
            <div className='flex gap-6 mt-16 text-h4 justify-center md:justify-start'>
              <a href="#"><img src={InstagramIcon} alt="" /></a>
              <a href="#"><img src={WhatsAppIcon} alt="" /></a>
            </div>
          </div>
        </div>
        <div className='font-montserrat text-p3 text-center md:text-right gap-4 lg:flex-col lg:flex hidden'>
          <p>Certificados</p>
          <div className='flex gap-5'>
            <img className='w-20 h-20' src={GenericBadge} alt="" />
            <img className='w-20 h-20' src={Securitybadge} alt="" />
            <img className='w-20 h-20' src={GamaBadge} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer