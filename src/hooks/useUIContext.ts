import { useContext } from 'react'
import { UIContext } from '../contexts/UI/ui.context'
import {
  goBackSideBarHistory,
  showAddItemForm,
  showCurrentShoppingList,
  showItemDetails,
} from '../contexts/UI/UI.actions'

export const useUIContext = () => {
  const { UI, dispatch } = useContext(UIContext)

  return {
    onScreenRightSidebar: UI.onScreenHistory[0] || UI.onScreenDefault,
    onListShow: showCurrentShoppingList(dispatch),
    onAddItemShow: showAddItemForm(dispatch),
    onShowItemDetails: showItemDetails(dispatch),
    onBack: goBackSideBarHistory(dispatch),
  }
}
