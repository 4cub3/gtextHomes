import React from 'react'

interface TeamImageProps {
    image: string;
}


const TeamImage:React.FC<TeamImageProps> = ({image}) => {
  return (
    <div className='max-w-[30rem] max-h-[25rem] h-[30rem]  rounded-tr-[5rem] bg-blue-10 relative'>
            <figure className='w-[40rem] max-w-[30rem] absolute bottom-0 left-1/2 -translate-x-1/2'>
                <img src={image} alt="team" />
            </figure>
    </div>
  )
}

export default TeamImage;