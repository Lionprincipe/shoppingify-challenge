import { IconsRef } from '../../types/icon'
export interface NavLinkType {
  text: string
  iconRef: IconsRef
  to: string
}

export const logoLinkData = {
  text: '',
  iconRef: IconsRef.Logo,
  to: '/',
}
export const shopppingCardLinkData = {
  text: '',
  iconRef: IconsRef.Items,
  to: '/',
}

export const navLinks: NavLinkType[] = [
  {
    text: 'items',
    iconRef: IconsRef.Items,
    to: '/',
  },
  {
    text: 'histories',
    iconRef: IconsRef.Histories,
    to: '/histories',
  },
  {
    text: 'statistic',
    iconRef: IconsRef.Statistics,
    to: '/statistics',
  },
]
