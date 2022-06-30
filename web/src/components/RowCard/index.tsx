import LacoFloral from '../../assets/lacofloral.png'
import CardButton from '../CardButton'

function RowCard() {
    return (
        <div className='rounded-[35px] shadow-lg bg-white hover:scale-105 transition my-10 w-[304px]'>
            <img className='' src={LacoFloral} alt="" />
            <div className='flex justify-between items-center px-6 my-4 w-[304px] relative'>
                <div className='text-fiona'>
                    <p className='text-p3'>Laço Floral</p>
                    <p className='text-[36px]'>R$ 38,00</p>
                </div>
                <CardButton />
            </div>
        </div>
    )
}

export default RowCard