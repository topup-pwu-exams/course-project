import React from 'react'
import InfoCard from '../common/InfoCard'

function InfoSection() {
  return (
    <div className='custom-layout mb-10'>
        <h2 className=''>Our Learning Opportunity</h2>
        <div className='flex justify-center items-center space-x-10 mt-5'>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
        </div>
    </div>
  )
}

export default InfoSection