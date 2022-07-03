import Rating from '@mui/material/Rating'
import React from 'react'
import Comment from '../Comment'

function CommentSection() {
  return (
    <section className='bg-bege-100 py-20 flex justify-center'>
        <div className='container mx-2'>
            <h1 className='font-montserrat text-h3 text-rosa-200 font-bold'>Avaliações</h1>
            <div className='flex gap-8 items-center'>
                <p className='text-[40px] font-semibold text-preto-100 font-montserrat'>4.0</p>
                <Rating name="read-only" value={4} readOnly style={{ color: '#BC8383' }} size='small' />
                <p className='text-montserrat font-medium text-p3 text-preto-100'>1 Avaliação</p>
            </div>
            <Comment />
        </div>
    </section>
  )
}

export default CommentSection