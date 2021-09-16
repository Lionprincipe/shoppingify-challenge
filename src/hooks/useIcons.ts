import { ReactComponent as LogoIcon } from '../assets/icons/logo.svg'
import { ReactComponent as ShoppingCardIcon } from '../assets/icons/shopping_cart.svg'
import { ReactComponent as HistoryIcon } from '../assets/icons/history_icon.svg'
import { ReactComponent as StatIcon } from '../assets/icons/stat_icon.svg'
import { ReactComponent as ListIcon } from '../assets/icons/list_icon.svg'
import { IconsRef } from '../types/icon'

export const useIcon = (iconName: IconsRef) => {
  switch (iconName) {
    case IconsRef.Logo: {
      return LogoIcon || null
    }

    case IconsRef.ShoppingCard: {
      return ShoppingCardIcon || null
    }

    case IconsRef.Items: {
      return ListIcon || null
    }

    case IconsRef.Histories: {
      return HistoryIcon || null
    }

    case IconsRef.Statistics: {
      return StatIcon || null
    }

    default:
      return null
  }
}
