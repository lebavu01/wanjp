import React from 'react'
import CardList from '@/components/Card'
export default function Home() {
  return (
    <div>
      <h2 className='border-grey-df border-b-[1px] border-solid pb-[1.5rem] text-xl'>Home</h2>
      {/* <PageTitle></PageTitle> */}
      <div className='py-[4rem]'>
        <CardList />
      </div>
    </div>
  )
}
