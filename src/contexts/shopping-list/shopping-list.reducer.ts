import produce from 'immer'
import { createDataId } from '../../helpers/uuid-generator'
import {
  ActionType,
  ShoppingListActionsTypes,
} from './shopping-list.action-types'

import {
  ShoppingListItemType,
  ShoppingListType,
  ShoppingListTypeContext,
} from '.'
import { getCurrentShoppingListIndexes } from '../../helpers/reducers-fn'

export const shoppingListReducer = produce(
  (state: Omit<ShoppingListTypeContext, 'dispatch'>, action: ActionType) => {
    const currentList = state.shoppingList.currentShoppingList
    switch (action.type) {
      case ShoppingListActionsTypes.EDIT_CURRENT_SHOPPING_LIST_NAME: {
        const { name } = action.payload
        if (!!currentList) {
          currentList.name = name
        }
        break
      }
      case ShoppingListActionsTypes.ADD_ITEM_TO_CURRENT_SHOPPING_LIST: {
        const { categoryId, categoryName, item } = action.payload
        if (!currentList) {
          state.shoppingList.currentShoppingList = setEmptyCurrentShoppingList(
            categoryId,
            categoryName,
            item
          )
        } else {
          const categories = currentList.categories
          const { indexCategory, indexItem } = getCurrentShoppingListIndexes(
            categories,
            categoryId,
            item.id
          )
          if (indexCategory > -1 && indexItem > -1) {
            categories[indexCategory].items[indexItem].quantity++
          } else if (indexCategory > -1) {
            categories[indexCategory].items.push(item)
          } else {
            categories.push({
              id: categoryId,
              title: categoryName,
              items: [item],
            })
          }
        }
        break
      }
      case ShoppingListActionsTypes.UPDATE_CURRENT_SHOPPING_LIST_ITEM_QUANTITY: {
        const { itemId, categoryId, increment = 1 } = action.payload
        if (!!currentList) {
          const { indexCategory, indexItem } = getCurrentShoppingListIndexes(
            currentList.categories,
            categoryId,
            itemId
          )
          currentList.categories[indexCategory].items[indexItem].quantity +=
            increment
        }
        break
      }
      case ShoppingListActionsTypes.REMOVE_ITEM_FROM_CURRENT_SHOPPING_LIST: {
        const { itemId, categoryId } = action.payload
        if (!!currentList) {
          const { indexCategory, indexItem } = getCurrentShoppingListIndexes(
            currentList.categories,
            categoryId,
            itemId
          )
          const items = currentList.categories[indexCategory].items
          if (items.length === 1) {
            currentList.categories.splice(indexCategory, 1)
          } else {
            currentList.categories[indexCategory].items.splice(indexItem, 1)
          }
        }
        break
      }
      case ShoppingListActionsTypes.TOGGLE_CHECKED_ITEM_IN_CURRENT_SHOPPING_LIST_ITEM: {
        const { itemId, categoryId } = action.payload
        if (!!currentList) {
          const { indexCategory, indexItem } = getCurrentShoppingListIndexes(
            currentList.categories,
            categoryId,
            itemId
          )
          const item = currentList.categories[indexCategory].items[indexItem]
          item.checked = !item.checked
        }
        break
      }
      default:
        return state
    }
  }
)

function setEmptyCurrentShoppingList(
  categoryId: string,
  categoryName: string,
  item: ShoppingListItemType
): ShoppingListType {
  const categories = [{ id: categoryId, title: categoryName, items: [item] }]
  return {
    id: createDataId(),
    name: '',
    date: 'Mon 16.9.2020',
    status: 'current',
    categories,
  }
}
