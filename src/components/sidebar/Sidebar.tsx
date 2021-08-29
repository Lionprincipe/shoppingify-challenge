import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import { ReactComponent as ShoppingCardIcon } from '../../assets/icons/shopping_cart.svg'
import { ReactComponent as HistoryIcon } from '../../assets/icons/history_icon.svg'
import { ReactComponent as StatIcon } from '../../assets/icons/stat_icon.svg'
import { ReactComponent as ListIcon } from '../../assets/icons/list_icon.svg'

import './Sidebar.style.css'

export const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <header>
        <LogoIcon className='icon logo-icon' />
      </header>
      <nav>
        <ul>
          <li className='nav-item'>
            <ListIcon className='icon' />
          </li>
          <li className='nav-item'>
            <HistoryIcon className='icon' />
          </li>
          <li className='nav-item'>
            <StatIcon className='icon' />
          </li>
        </ul>
      </nav>
      <footer>
        <button className='btn-shopping-card'>
          <span>3</span>

          <ShoppingCardIcon className='shopping-icon' />
        </button>
      </footer>
    </aside>
  )
}
