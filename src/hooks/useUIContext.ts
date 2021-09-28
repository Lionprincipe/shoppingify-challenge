import { useContext } from 'react'
import { UIContext } from '../contexts/UI/ui.context'
import {
  flushSidebarHistory,
  goBackSideBarHistory,
  showAddItemForm,
  showCurrentShoppingList,
  showItemDetails,
} from '../contexts/UI/UI.actions'

export const useUIContext = () => {
  const { UI, dispatch } = useContext(UIContext)
  const { screenName, options = {} } =
    UI.onScreenHistory.length > 0
      ? UI.onScreenHistory[0]
      : { screenName: UI.onScreenDefault }

  return {
    onScreenRightSidebar: screenName,
    options,
    nbViewsInHistory: UI.onScreenHistory.length,
    flushSidebarHistory: flushSidebarHistory(dispatch),
    onListShow: showCurrentShoppingList(dispatch),
    onAddItemShow: showAddItemForm(dispatch),
    onShowItemDetails: showItemDetails(dispatch),
    onBack: goBackSideBarHistory(dispatch),
  }
}
