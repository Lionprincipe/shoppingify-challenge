import React from 'react'

import { IconsRef } from '../../types/icon'
import { Icon } from '../Icon/Icon'

const DEFAULT_SHOPPING_LIST_NAME = 'Shopping list'
type CardListInfoHeadingProps = {
  headline: string
  modeToggler: (switchMode: boolean) => void
  isModeToggled: boolean
}
export const CardListInfoHeading: React.FC<CardListInfoHeadingProps> = ({
  modeToggler,
  isModeToggled,
  headline,
}) => {
  return (
    <h2 className='card-list__list-info__list-name'>
      {headline || DEFAULT_SHOPPING_LIST_NAME}
      <button
        className='card-list__list-info_mode-icon'
        onClick={() => modeToggler(!isModeToggled)}
      >
        <Icon
          iconRef={isModeToggled ? IconsRef.CheckMode : IconsRef.EditMode}
        />
      </button>
    </h2>
  )
}
