import React from 'react'

interface TeamImageProps {
    image: string;
    className?: string;
    width?: boolean;
}


const TeamImage:React.FC<TeamImageProps> = ({image ,className = '', width}) => {
  return (
    <div className={` h-[30rem] mt-60 rounded-tr-[5rem] bg-blue-10 relative ${width ? 'w-[30rem] h-[20.8rem]' : "w-[30rem]"}`} >
            <figure className={`w-[28rem] absolute bottom-0 left-0 ${className} `}>
                <img src={image} alt="team"  className='w-full h-full'/>
            </figure>
    </div>
  )
}

export default TeamImage;