import { useLocation } from 'react-router-dom'
import { SideNavBarLink } from './SideNavBarLink'
import {
  navLinks,
  shopppingCardLinkData,
  logoLinkData,
} from './SideNavBar.data'
import './SideNavbar.style.css'
import { Icon } from '../Icon/Icon'
import { useShoppingListContext } from '../../hooks/useShoppingListContext'
import { useUIContext } from '../../hooks/useUIContext'

export const SideNavbar: React.FC<{ navLinks?: string[] }> = () => {
  const location = useLocation()
  const { countItemsInCurrentShoppingList } = useShoppingListContext()
  const { mobileNavClearSideView, displayShoppingListCard } = useUIContext()

  return (
    <div className='side-navbar__container'>
      <nav className='side-navbar__nav'>
        <ul className='side-navbar__nav-items'>
          <li className='side-navbar__nav-item'>
            <SideNavBarLink
              {...logoLinkData}
              onClick={mobileNavClearSideView}
              iconClassName='side-navbar__logo'
            />
          </li>
          {navLinks.map((linkData, index) => (
            <li
              className={`side-navbar__nav-item side-navbar__nav-items__show-info ${
                location.pathname === linkData.to
                  ? 'side-navbar__nav-item--active'
                  : ''
              }`}
              key={index}
            >
              <SideNavBarLink
                {...linkData}
                onClick={mobileNavClearSideView}
                iconClassName='side-navbar__nav-item__icon'
              />
            </li>
          ))}
          <li className='side-navbar__nav-item'>
            <button
              className='side-navbar__btn-shopping-card'
              onClick={displayShoppingListCard}
            >
              {countItemsInCurrentShoppingList > 0 && (
                <span className='side-navbar__in-card-number'>
                  {countItemsInCurrentShoppingList}
                </span>
              )}
              <Icon
                iconRef={shopppingCardLinkData.iconRef}
                className='side-navbar__shopping-icon'
              />
              <span className='side-navbar__link-info'>
                {shopppingCardLinkData.text}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
