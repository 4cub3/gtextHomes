import React from 'react'

interface ParagraphTextProps{
    children:React.ReactNode;
}

const ParagraphText:React.FC<ParagraphTextProps> = ({children}) => {
  return (
    <p className='sm:text-[1.8rem] text-[1.6rem] leading-[2rem] sm:leading-[2.5rem] mt-10'>{children}</p>
  )
}

export default ParagraphText