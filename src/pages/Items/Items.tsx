import { CategoryItems } from '../../components'
import { useCategoriesItems } from '../../hooks/useCategoriesItems'
import { Ipage } from '../../types'

import { brandLabel, headingText } from './Items.data'

import './Items.style.css'

export const ItemsPages: React.FunctionComponent<Ipage> = () => {
  const { categoriesItems: data } = useCategoriesItems()
  return (
    <div className='items-container'>
      <header className='items-header'>
        <h2>
          <strong>{brandLabel}</strong> {headingText}
        </h2>
      </header>
      {data.map(({ id, title, items }) => (
        <CategoryItems categoryId={id} items={items} title={title} key={id} />
      ))}
    </div>
  )
}
