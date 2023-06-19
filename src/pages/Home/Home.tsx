import React from 'react'
import Card from '@/components/Card'

export default function Home() {
  return (
    <div className='md:px-8 md:py-12'>
      <h3 className='mb-12 text-center text-[2.4rem] font-normal'>What do you want to search for?</h3>
      <Card></Card>
    </div>
  )
}
