import React from 'react'
import Title from '../../../shared/Title/Title';

import { FaArrowRight } from 'react-icons/fa'
import Container from '../../../shared/Container/Container';
import { GALLERY_DATA } from './galleryData';

const Gallery:React.FC = () => {
    const gallery = GALLERY_DATA.map(itm => (
  
            <img src={itm.image} alt='gallery-image' className='w-[40rem] max-w-[60rem] h-[30rem] object-cover object-center rounded-xl' key={itm.id}/>
           
    ))
  return (
    <section className='w-full overflow-hidden mt-32'>
        <Container>
        <article className='mb-20 px-10 space-y-20'>
          
        <Title>
            Gallery
        </Title>
        
        <div className='flex justify-end w-full'>
        <button type='button' className='flex px-0 py-0 items-center gap-6'>
            See all <FaArrowRight />
        </button>
        </div>
        </article>
        </Container>
        <div className='w-full overflow-x-scroll px-10 flex gap-10 mb-60'>
           {gallery}
        </div>
    </section>
  )
}

export default Gallery