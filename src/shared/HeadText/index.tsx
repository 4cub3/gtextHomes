import React from 'react'

interface HeadTextPrps{
    children: React.ReactNode;
}


const HeadText:React.FC<HeadTextPrps> = ({children}) => {
  return (
    <h3 className='font-serif leading-[4rem] text-[4rem] mt-6 relative '>{children}</h3>
  )
}

export default HeadText