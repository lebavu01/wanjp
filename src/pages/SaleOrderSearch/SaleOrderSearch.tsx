import Breadcrumb from '@/components/Breadcrumb'
import DataTable from '@/components/DataTable'

export default function SaleOrderSearch() {
  return (
    <div>
      <Breadcrumb />
      <h2 className='border-grey-df border-b-[1px] border-solid pb-[1.5rem] text-xl'>Sale Order Search</h2>
      <div className='main-layout'>
        <aside className='aside bg-grey-f6 p-2'></aside>
        <main className='main-content'>
          <DataTable></DataTable>
        </main>
      </div>
    </div>
  )
}
