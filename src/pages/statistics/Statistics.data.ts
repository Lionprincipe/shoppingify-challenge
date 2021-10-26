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

export const monthlySummary = {
  headerText: 'Monthly Summary',
  strockColor: '#F9A109',
  fillColor: '#FFFFFF',
  data: [
    {
      name: 'January',
      value: 35,
    },
    {
      name: 'February',
      value: 123,
    },
    {
      name: 'Mars',
      value: 32,
    },
    {
      name: 'April',
      value: 12,
    },
    {
      name: 'May',
      value: 33,
    },
    {
      name: 'June',
      value: 10,
    },
    {
      name: 'July',
      value: 46,
    },
  ],
}
