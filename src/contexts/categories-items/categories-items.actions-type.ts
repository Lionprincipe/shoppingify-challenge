import { InputFieldsTypes } from '../../types'

export type CategoriesItemsDispatchType = React.Dispatch<{
  type: CategoriesItemsActionsTypes
  payload: InputFieldsTypes
}>

export enum CategoriesItemsActionsTypes {
  ADD_ITEM_TO_CATEGORY = 'ADD_ITEM_TO_CATEGORY',
}
