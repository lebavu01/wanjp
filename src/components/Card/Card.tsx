const CardList = () => {
  const data = [
    {
      id: 1,
      title: 'Sales Orders',
      imageUrl: '/src/assets/react.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      title: 'Open Orders [name TBD]',
      imageUrl: '/src/assets/react.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 3,
      title: 'Supplier Inventory',
      imageUrl: '/src/assets/react.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 4,
      title: 'Product Inventory',
      imageUrl: '/src/assets/react.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ]

  return (
    <div className='mx-auto grid gap-2 sm:grid-cols-2 lg:w-1/2'>
      {data.map((card) => (
        <Card key={card.id} title={card.title} imageUrl={card.imageUrl} description={card.description} />
      ))}
    </div>
  )
}

const Card = ({ title, imageUrl, description }) => {
  return (
    <div className='card rounded-[1rem] bg-white p-8 shadow-lg transition hover:bg-grey-f6'>
      <h3 className='mb-2 text-center text-xl'>{title}</h3>
      <div className='mt-[2rem] h-[4rem] children:mx-auto children:h-full children:w-auto'>
        <img src={imageUrl} alt={title} />
      </div>
      <p className='text-gray-600 mt-[2rem]'>{description}</p>
    </div>
  )
}

export default CardList
