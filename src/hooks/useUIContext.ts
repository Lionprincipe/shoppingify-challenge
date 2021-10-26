import { useContext } from 'react'
import { UIContext } from '../contexts/UI/ui.context'
import {
  flushSidebarHistory,
  goBackSideBarHistory,
  showAddItemForm,
  showCurrentShoppingList,
  showItemDetails,
} from '../contexts/UI/UI.actions'
import { useIsMobileSizeDetected } from './useIsMobileSizeDetected'
import { RightSideBarScreenNames } from '../types'

export const useUIContext = () => {
  const { UI, dispatch } = useContext(UIContext)
  const isMobile = useIsMobileSizeDetected()
  const { screenName, options = {} } =
    UI.onScreenHistory.length > 0
      ? UI.onScreenHistory[0]
      : { screenName: UI.onScreenDefault }

  const mobileNavClearSideView = () =>
    isMobile && flushSidebarHistory(dispatch)()

  const displayShoppingListCard = () => {
    mobileNavClearSideView()
    showCurrentShoppingList(dispatch)(
      RightSideBarScreenNames.SHOW_CURRENT_SHOPPING_LIST
    )
  }

  return {
    showMobileView: isMobile && UI.onScreenHistory.length > 0,
    onScreenRightSidebar: screenName,
    options,
    nbViewsInHistory: UI.onScreenHistory.length,
    flushSidebarHistory: flushSidebarHistory(dispatch),
    onListShow: showCurrentShoppingList(dispatch),
    onAddItemShow: showAddItemForm(dispatch),
    onShowItemDetails: showItemDetails(dispatch),
    onBack: goBackSideBarHistory(dispatch),
    displayShoppingListCard,
    mobileNavClearSideView,
  }
}
