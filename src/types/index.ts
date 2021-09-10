export type TopAccent = 'topcategories' | 'topitems'

export type CategoryItems = {
  title: string
  items: ListItem[]
}

export type ListItem = {
  label: string
  quantity: string
}

export enum InputTypes {
  Text = 'text',
  Select = 'select',
  Number = 'number',
  TextArea = 'textarea',
}

export type InputFiledNamesTypes = 'name' | 'imageUrl' | 'note' | 'category'

export type InputFieldsTypes = {
  name: string
  imageUrl: string
  note: string
  category: string
}
