import React from "react"
interface ContainerProps{
  children: React.ReactNode;
}
const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <section className="max-w-[1200px] mx-auto py-10 relative">{children}</section>
  )
}

export default Container