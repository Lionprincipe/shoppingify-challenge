import { InputTypes, InputFiledNamesTypes } from '../../types'

export const addItemHeading = 'Add a new item'

export const optionalMarker = '(optional)'

interface InputInfoType {
  type: InputTypes
  label: string
  name: InputFiledNamesTypes
  placeholder: string
  optional?: true
  options?: { label: string; value: string }[]
}

export const inputInfo: InputInfoType[] = [
  {
    type: InputTypes.Text,
    label: 'Name',
    name: 'name',
    placeholder: 'Enter a name',
  },
  {
    type: InputTypes.TextArea,
    label: 'Note',
    name: 'note',
    placeholder: 'Enter a note',
    optional: true,
  },
  {
    type: InputTypes.Text,
    label: 'Image',
    name: 'imageUrl',
    placeholder: 'Enter a url',
    optional: true,
  },
  {
    type: InputTypes.Select,
    label: 'Category',
    name: 'category',
    options: [
      { label: 'Fruit and vegetables', value: 'Fruit and vegetables' },
      { label: 'Meat and Fish', value: 'Meat and Fish' },
      { label: 'Beverages', value: 'Beverages' },
    ],
    placeholder: 'Enter a category',
  },
]
