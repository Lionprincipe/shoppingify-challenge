export interface Ipage {
  name: string
}

export type TopAccent = 'topcategories' | 'topitems'

export interface ListItem {
  note?: string
  imageUrl?: string
  quantity?: string
  id: string
  label: string
}

export interface CategoryItemsType {
  id: string
  title: string
  items: ListItem[]
}

export enum InputTypes {
  Text = 'text',
  Select = 'select',
  Number = 'number',
  TextArea = 'textarea',
}

export type InputFiledNamesTypes = 'name' | 'imageUrl' | 'note' | 'category'

export interface InputFieldsTypes {
  name: string
  imageUrl?: string
  note?: string
  category: string
}

export interface ItemDataType extends InputFieldsTypes {}

export enum RightSideBarScreenNames {
  ADD_ITEM = 'ADD_ITEM',
  SHOW_ITEM_DETAILS = 'SHOW_ITEMS_DETAILS',
  SHOW_CURRENT_SHOPPING_LIST = 'SHOW_CURRENT_SHOPPING_LIST',
}
