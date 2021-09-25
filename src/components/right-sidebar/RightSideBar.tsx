import React from 'react'
import { AddItemForm, CardList, ItemsDetails } from '..'
import { useUIContext } from '../../hooks/useUIContext'
import { RightSideBarScreenNames } from '../../types'

export const RightSideBar = () => {
  const { options, onScreenRightSidebar, onListShow, onBack, onAddItemShow } =
    useUIContext()

  switch (onScreenRightSidebar) {
    case RightSideBarScreenNames.SHOW_ITEM_DETAILS: {
      return <ItemsDetails {...options} onBack={onBack} />
    }
    case RightSideBarScreenNames.ADD_ITEM: {
      return (
        <AddItemForm
          onCancelScreenChange={() =>
            onListShow(RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST)
          }
        />
      )
    }
    case RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST: {
      return (
        <CardList
          openAddItemForm={() =>
            onAddItemShow(RightSideBarScreenNames.ADD_ITEM)
          }
        />
      )
    }
    default:
      return null
  }
}
