import { useContext, useEffect, useState } from 'react'
import { addModal, removeModal, UIContext } from '../contexts'
// import { ModalDataType } from '../types'

export const useModalAlert = (...arg: number[]) => {
  const {
    UI: { modals },
    dispatch,
  } = useContext(UIContext)
  const index = arg.length > 0 ? arg[0] : 0
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(modals.length > 0)
  }, [modals])
  const modal = modals[index]

  const openModal = () => setIsOpen(true)

  const closeModal = (index: number = -1) => {
    modal && modal.cancelFn && modal.cancelFn()
    removeModal(dispatch)(index)
    setIsOpen(false)
  }

  const onConfirm = () => {
    modal && modal.confirmFn && modal.confirmFn()
    closeModal()
  }

  return {
    isOpen,
    message: modals[0] ? modals[0].message : '',
    addModal: addModal(dispatch),
    openModal,
    closeModal,
    onCancel: closeModal,
    onConfirm,
  }
}
