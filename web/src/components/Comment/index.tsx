import Rating from '@mui/material/Rating'
import CommentLogo from '../../assets/commentlogo.svg'

function Comment() {
  return (
    <div className='w-3/4 rounded-lg h-60'>
        <img className='relative bottom-10 left-10' src={CommentLogo} alt="" />
        <div className='flex flex-col mx-10 mb-7'>
        <div className='flex gap-5 items-center'>
            <p className='font-fiona text-[40px]'>Adriana - São Paulo</p>
            <Rating name="read-only" value={4} readOnly style={{ color: '#BC8383' }} size='large' />
        </div>
            <div className='w-[90%]'>
                <p className='font-raleway font-light font-h6'>Oiii, já chegou meu laço, o próximo eu vou pedir um rosinha! Muito lindo!! Ótima qualidade, que dom você tem nas mãos! E que cheirinho é esse??? E o brinde? Ah meu Deus, quanto capricho! Sem palavras, muito obrigada!!!</p>
            </div>
        </div>
    </div>
  )
}

export default Comment