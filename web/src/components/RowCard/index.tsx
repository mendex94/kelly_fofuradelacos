import LacoFloral from '../../assets/lacofloral.png'
import CardButton from '../CardButton'

function RowCard() {
    return (
        <div className='rounded-[35px] shadow-lg bg-white transition my-10 cursor-pointer snap-center flex-shrink-0 md:hover:scale-105'>

            <img className='' src={LacoFloral} alt="" />

            <div className='flex justify-between items-center px-6 my-4 w-full'>

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