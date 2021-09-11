import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import { ReactComponent as ShoppingCardIcon } from '../../assets/icons/shopping_cart.svg'
import { ReactComponent as HistoryIcon } from '../../assets/icons/history_icon.svg'
import { ReactComponent as StatIcon } from '../../assets/icons/stat_icon.svg'
import { ReactComponent as ListIcon } from '../../assets/icons/list_icon.svg'

import './SideNavbar.style.css'

export const SideNavbar = () => {
  return (
    <div className='side-navbar__container'>
      <nav className='side-navbar__nav'>
        <ul className='side-navbar__nav-items'>
          <li className='side-navbar__nav-item'>
            <LogoIcon className='side-navbar__logo' />
          </li>
          <li className='side-navbar__nav-item'>
            <ListIcon className='icon' />
          </li>
          <li className='side-navbar__nav-item'>
            <HistoryIcon className='icon' />
          </li>
          <li className='side-navbar__nav-item'>
            <StatIcon className='icon' />
          </li>
          <li className='side-navbar__nav-item'>
            <button className='side-navbar__btn-shopping-card'>
              <span className='side-navbar__in-card-number'>3</span>

              <ShoppingCardIcon className='side-navbar__shopping-icon' />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
