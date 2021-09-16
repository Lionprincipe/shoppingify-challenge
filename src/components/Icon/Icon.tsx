import React from 'react'
import { useIcon } from '../../hooks/useIcons'
import { IconsRef } from '../../types/icon'

export const Icon: React.FC<React.SVGProps<any> & { iconRef: IconsRef }> = ({
  iconRef,
  ...otherProps
}) => {
  const Icon = useIcon(iconRef)
  return Icon && <Icon {...otherProps} />
}
