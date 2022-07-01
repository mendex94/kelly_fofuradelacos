import Rating from '@mui/material/Rating'
import React from 'react'
import Comment from '../Comment'

function CommentSection() {
  return (
    <section className='bg-bege-100'>
        <div className='container mx-auto'>
            <h1 className='font-fiona text-h1 text-rosa-200'>Avaliações</h1>
            <div className='flex gap-8 items-center'>
                <p className='text-h5 text-preto-100 font-fiona'>4.0</p>
                <Rating name="read-only" value={4} readOnly style={{ color: '#BC8383' }} size='small' />
                <p className='text-raleway text-p3 text-preto-100'>1 Avaliação</p>
            </div>
            <Comment />
        </div>
    </section>
  )
}

export default CommentSection