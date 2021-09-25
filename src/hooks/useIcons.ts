import { ReactComponent as CheckModeIcon } from '../assets/icons/check_list.svg'
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg'
import { ReactComponent as DeleteIcon } from '../assets/icons/delete_trash.svg'
import { ReactComponent as EditModeIcon } from '../assets/icons/edit_pencil.svg'
import { ReactComponent as HistoryIcon } from '../assets/icons/history_icon.svg'
import { ReactComponent as ListIcon } from '../assets/icons/list_icon.svg'
import { ReactComponent as LogoIcon } from '../assets/icons/logo.svg'
import { ReactComponent as StatIcon } from '../assets/icons/stat_icon.svg'
import { ReactComponent as ShoppingCardIcon } from '../assets/icons/shopping_cart.svg'

import { IconsRef } from '../types/icon'

export const useIcon = (iconName: IconsRef) => {
  switch (iconName) {
    case IconsRef.Close: {
      return CloseIcon || null
    }
    case IconsRef.CheckMode: {
      return CheckModeIcon || null
    }
    case IconsRef.Delete: {
      return DeleteIcon || null
    }
    case IconsRef.EditMode: {
      return EditModeIcon || null
    }
    case IconsRef.Histories: {
      return HistoryIcon || null
    }
    case IconsRef.Items: {
      return ListIcon || null
    }
    case IconsRef.Logo: {
      return LogoIcon || null
    }
    case IconsRef.Statistics: {
      return StatIcon || null
    }
    case IconsRef.ShoppingCard: {
      return ShoppingCardIcon || null
    }

    default:
      return null
  }
}
