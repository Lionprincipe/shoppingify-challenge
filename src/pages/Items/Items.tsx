import React from 'react'
import { CategoryItems } from '../../components'
import './Items.style.css'

export const ItemsPages = () => {
  const brandLabel = 'Shoppingify'
  const headingText = 'allows you take your shopping list wherever you go'
  const data = [
    {
      title: 'Fruit and vegetables',
      items: [
        'avocado',
        ' banana',
        'Bunch of carrots 5pcs',
        'Potatoes 1kg',
        ' precooked corn 450g',
        'Mandarin Nadorcott',
        'Piele De Sapo Melon',
        'Watermelon',
      ],
    },
    {
      title: 'Beverages',
      items: [
        'Coke zero',
        'Lamate 60 cl',
        ' Heineken 33cl',
        'Orange juice 1l',
        'Limonade 1l',
        'Ice tee 1l',
        'Tonic 1l',
        'Sangria 1l',
      ],
    },
    {
      title: 'Meat and Fish',
      items: [
        'Chicken leg box',
        ' Chicken 1kg',
        ' Pork fillets 450g',
        ' Salmon 1kg',
      ],
    },
  ]
  return (
    ///itesm view
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
