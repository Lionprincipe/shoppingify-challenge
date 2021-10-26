import { useEffect, useState } from 'react'
import { MaxDeviceSizes } from '../types/device-sizes'

export const useIsMobileSizeDetected = (
  maxDeviceSize = MaxDeviceSizes.Mobile
) => {
  const [width, setWidth] = useState(getWindowSize())
  const handleWindowResize = () => {
    setWidth(getWindowSize())
  }

  useEffect(() => {
    window && window.addEventListener('resize', handleWindowResize)
    return () => {
      window && window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return width <= maxDeviceSize
}

function getWindowSize() {
  return window ? window.innerWidth : 0
}
