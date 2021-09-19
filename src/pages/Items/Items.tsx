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
      {data.map(({ title, items }, index) => (
        <CategoryItems items={items} title={title} key={index} />
      ))}
    </div>
  )
}
