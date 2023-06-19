import styles from './Card.module.scss'
import uploadIcon from '@/assets/upload.png'
import board from '@/assets/board.png'
import board1 from '@/assets/board1.png'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const CardList = () => {
  const data = [
    {
      id: 1,
      title: 'Sales Orders',
      imageUrl: '/src/assets/board.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      hasUpload: true
    },
    {
      id: 2,
      title: 'Open Orders [name TBD]',
      imageUrl: '/src/assets/board.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      hasUpload: false
    },
    {
      id: 3,
      title: 'Supplier Inventory',
      imageUrl: '/src/assets/board.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      hasUpload: false
    },
    {
      id: 4,
      title: 'Product Inventory',
      imageUrl: '/src/assets/board.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      hasUpload: false
    },
    {
      id: 5,
      title: 'Product Inventory',
      imageUrl: '/src/assets/board.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      hasUpload: false
    }
  ]

  return (
    <div className={cx('card-list')}>
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
          hasUpload={card.hasUpload}
        />
      ))}
    </div>
  )
}

const Card = ({ title, imageUrl, description, hasUpload }) => {
  return (
    <div className={cx('card')}>
      <div className={cx('card-icon')}>
        <img src={imageUrl} alt={title} />
      </div>
      <h3 className={cx('card-title')}>{title}</h3>
      <p className={cx('card-desc')}>{description}</p>
      {hasUpload && (
        <div className={cx('card-upload')}>
          <img src={uploadIcon} className={cx('upload-image')} alt='React logo' />
          Sales Order Manual Upload
        </div>
      )}
    </div>
  )
}

export default CardList
