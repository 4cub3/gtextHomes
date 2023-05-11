import React from 'react'
import Container from '../../../shared/Container/Container'
import Button from '../../../shared/Button/Button'
import Arrow from '../../../assets/icons/arrow.svg';

const SignUp:React.FC = (   ) => {
  return (
    <section className='px-10 my-40'>
        <Container>
            <div className='flex items-center justify-center'>
        <article className=' space-y-8 md:space-y-0 xs:flex items-center gap-6'>
            <p className='font-serif text-3xl'>
            Sign Up to Book an Inspection
            </p>
            <Button type='button' secondary={true} className='flex items-center text-white gap-20' link='/visitus'>
                Sign Up 
                 <img src={Arrow} className='-rotate-90 brightness-0 invert h-20 w-20' />
            </Button>
        </article>
        </div>
        </Container>
    </section>
  )
}

export default SignUp