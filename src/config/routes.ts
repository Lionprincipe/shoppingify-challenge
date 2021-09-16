import {
  HistoriesPage,
  HistoryPage,
  ItemsPages,
  StatisticsPage,
} from '../pages'
import IRoute from '../types/route'

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    name: 'Home Page',
    component: ItemsPages,
  },
  {
    path: '/histories/:id',
    exact: true,
    name: 'History',
    component: HistoryPage,
  },
  {
    path: '/histories',
    exact: true,
    name: 'List Histories',
    component: HistoriesPage,
  },
  {
    path: '/statistics',
    exact: true,
    name: 'Users Statistiques',
    component: StatisticsPage,
  },
]
