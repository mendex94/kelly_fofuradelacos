import LacoCart from '../../assets/lacocart.png'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';



function CartItem() {
  return (
    <div className='container p-2 bg-[#FFFFFF] md:rounded-lg md:p-10 md:justify-between mb-5 flex flex-col gap-3 md:flex-row h-64'>
        <div className='flex gap-5'>
            <img src={LacoCart} alt="" className='rounded-[30px] shadow-lg'/>
            <div className='flex flex-col gap-6'>
                <div className='flex justify-between'>
                <h2 className='font-bold md:text-p2 text-h5 font-montserrat'>Laço Preto</h2>
                <button className='md:hidden relative text-rosa-200'><DeleteForeverOutlinedIcon /></button>
                </div>
                <div>   
                    <p className='font-semibold md:text-p3 text-p4 font-montserrat'>Descrição do Produto</p>
                    <p className='md:text-p3 text-p4 font-montserrat md:w-2/3'>Laço em linho e pedraria, feito à mão, podendo sofrer pequenas variações.</p>    
                </div>
            </div>    
        </div>
        <div className='flex  items-center justify-between md:ml-28 md:gap-32'>
            <div className='flex flex-col gap-3'>
                <div className='rounded-[30px] border-4 border-rosa-400 flex items-center ml-6 md:ml-0'>
                    <RemoveOutlinedIcon />
                    <input type="text" className='text-center focus:outline-none w-10 md:text-h4 text-h6 font-semibold font-montserrat'/>
                    <AddOutlinedIcon />
                </div>
                <button className='underline underline-offset-1 text-preto-100 text-h6 font-normal hidden md:inline font-montserrat'>Remover</button>
            </div>
            <div>
                <h2 className='font-bold md:text-p2 text-h6 md:mr-0 w-36 text-right'>R$ 38,00</h2>
            </div>
        </div>           
    </div>
  )
}

export default CartItem