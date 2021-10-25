import { InputFieldsTypes } from '../../types'

export enum CategoriesItemsActionsTypes {
  ADD_ITEM_TO_CATEGORY = 'ADD_ITEM_TO_CATEGORY',
  DELETE_ITEM_IN_CATEGORY = 'DELETE_ITEM_IN_CATEGORY',
}

interface AddItemToCategoryAction {
  type: CategoriesItemsActionsTypes.ADD_ITEM_TO_CATEGORY
  payload: InputFieldsTypes
}

interface DeleteItemInCategoryAction {
  type: CategoriesItemsActionsTypes.DELETE_ITEM_IN_CATEGORY
  payload: { itemId: string; categoryId: string }
}

export type CategoriesItemsActionType =
  | AddItemToCategoryAction
  | DeleteItemInCategoryAction

export type CategoriesItemsDispatchType =
  React.Dispatch<CategoriesItemsActionType>
