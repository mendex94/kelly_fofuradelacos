import Rating from '@mui/material/Rating'
import CommentLogo from '../../assets/commentlogo.svg'

function Comment() {
  return (
    <div className='rounded-lg bg-[#FFFFFF] my-16 mx-2'>
        <img className='relative bottom-10 left-11' src={CommentLogo} alt="" />
        <div className='flex flex-col mx-10 mb-7 relative my-0 bottom-8'>
        <div className='flex flex-col mb-2 lg:gap-5 lg:items-center lg:flex-row'>
            <p className='font-montserrat text-h4 font-medium'>Adriana - São Paulo</p>
            <Rating name="read-only" value={4} readOnly style={{ color: '#BC8383' }} size='large' />
        </div>
            <div className='w-[90%]'>
                <p className='font-montserrat font-light font-h6'>Oiii, já chegou meu laço, o próximo eu vou pedir um rosinha! Muito lindo!! Ótima qualidade, que dom você tem nas mãos! E que cheirinho é esse??? E o brinde? Ah meu Deus, quanto capricho! Sem palavras, muito obrigada!!!</p>
            </div>
        </div>
    </div>
  )
}

export default Comment