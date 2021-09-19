import React from 'react'
import { AddItemForm, CardList, ItemsDetails } from '..'
import { useUIContext } from '../../hooks/useUIContext'
import { RightSideBarScreenNames } from '../../types'

export const RightSideBar = () => {
  const { onScreenRightSidebar, onListShow, onBack, onAddItemShow } =
    useUIContext()

  switch (onScreenRightSidebar) {
    case RightSideBarScreenNames.SHOW_ITEM_DETAILS: {
      return <ItemsDetails onBack={() => onBack(onScreenRightSidebar)} />
    }
    case RightSideBarScreenNames.ADD_ITEM: {
      return (
        <AddItemForm
          onCancelScreenChange={() => onListShow(onScreenRightSidebar)}
        />
      )
    }
    case RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST: {
      return (
        <CardList openAddItemForm={() => onAddItemShow(onScreenRightSidebar)} />
      )
    }
    default:
      return null
  }
}
