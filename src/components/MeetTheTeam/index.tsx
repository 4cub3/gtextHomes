import React from 'react'
import Container from '../../shared/Container/Container'
import TeamImage from '../../shared/TeamImage'
import image from '../../assets/teams/stephen akintayo cut out 1.svg';
interface MeetTheTeamProps {

}

const MeetTheTeam:React.FC<MeetTheTeamProps> = () => {
  return (
    <section>
        <Container>
            <div className='grid grid-cols-1'>
                    <div className='mx-auto'>
                        <TeamImage image={image}/>
                    </div>
            </div>
        </Container>
    </section>
  )
}

export default MeetTheTeam