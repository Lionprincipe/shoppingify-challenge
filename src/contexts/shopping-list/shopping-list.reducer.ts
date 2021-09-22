import {
  ShoppingCategoryType,
  ShoppingListItemType,
  ShoppingListType,
  ShoppingListTypeContext,
} from '.'
import { createDataId } from '../../helpers/uuid-generator'
import { ShoppingListActionsTypes } from './shopping-list.action-types'
import { ShoppingListPayloadType } from './shopping-list.actions'

export function shoppingListReducer(
  state: Omit<ShoppingListTypeContext, 'dispatch'>,
  action: { type: ShoppingListActionsTypes; payload: ShoppingListPayloadType }
) {
  const { type, payload } = action
  switch (type) {
    case ShoppingListActionsTypes.ADD_ITEM_TO_CURRENT_SHOPPING_LIST: {
      let categories: ShoppingCategoryType[]
      if (!state.shoppingList.currentShoppingList) {
        categories = [
          {
            id: payload.categoryId,
            title: payload.categoryName,
            items: [payload.item],
          },
        ]
      } else {
        categories = state.shoppingList.currentShoppingList.categories
        const indexCategory = categories.findIndex(
          (category) => category.id === payload.categoryId
        )
        if (indexCategory > -1) {
          const currentCategory = categories[indexCategory] || []
          const itemIndex = currentCategory.items.findIndex(
            (item) => item.id === payload.item.id
          )

          let items: ShoppingListItemType[] = []
          if (itemIndex > -1) {
            const currentItem = currentCategory.items[itemIndex]
            items = [
              ...currentCategory.items.slice(0, itemIndex),
              { ...currentItem, quantity: currentItem.quantity + 1 },
              ...currentCategory.items.slice(itemIndex + 1),
            ]
          } else {
            items = [...categories[indexCategory].items, payload.item]
          }

          categories = [
            ...categories.slice(0, indexCategory),
            {
              ...categories[indexCategory],
              items,
            },
            ...categories.slice(indexCategory + 1),
          ]
        } else {
          categories = [
            ...categories,
            {
              id: payload.categoryId,
              title: payload.categoryName,
              items: [payload.item],
            },
          ]
        }
      }
      //TODO: function to format date.now to that format "'Mon 16.9.2020',"
      let currentShoppingList: ShoppingListType | null
      if (!!state.shoppingList.currentShoppingList) {
        currentShoppingList = {
          ...state.shoppingList.currentShoppingList,
          categories,
        } as ShoppingListType | null
      } else {
        currentShoppingList = {
          id: createDataId(),
          name: '',
          date: 'Mon 16.9.2020',
          status: 'current',
          categories,
        }
      }

      return {
        ...state,
        shoppingList: {
          ...state.shoppingList,
          currentShoppingList,
        },
      }
    }
    default:
      throw state
  }
}
