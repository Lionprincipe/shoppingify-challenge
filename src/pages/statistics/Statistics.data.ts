import { TopAccent } from '../../types'

const variantOne: TopAccent = 'topitems'
const variantTwo: TopAccent = 'topcategories'

export const statsData = [
  {
    title: 'Top Items',
    accent: variantOne,
    unit: '%',
    progressInfos: [
      { label: 'Banana', value: 12 },
      { label: 'Rice', value: 10 },
      { label: 'Chicken', value: 8 },
    ],
  },
  {
    title: 'Top Categories',
    accent: variantTwo,
    unit: '%',
    progressInfos: [
      { label: 'Fruit and vegetables', value: 12 },
      { label: 'Meat and Fish', value: 10 },
      { label: 'Pets', value: 8 },
    ],
  },
]
