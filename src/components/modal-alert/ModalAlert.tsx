import React from 'react'
import { CustomButton } from '..'
import { useModalAlert } from '../../hooks/useModalAlert'
import { IconsRef } from '../../types/icon'
import { Icon } from '../Icon/Icon'
import './ModalAlert.style.css'

export const ModalAlert: React.FC = () => {
  const { isOpen, onConfirm, onCancel, message } = useModalAlert()

  const onClose = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation()
    onCancel()
  }

  return isOpen ? (
    <div className={'modal-alert__container '} onClick={onClose}>
      <div className='modal-alert__alert-box'>
        <p className='modal-alert__message'>{message}</p>
        <button
          onClick={onClose}
          className='modal-alert__close-btn'
          type='button'
        >
          <Icon iconRef={IconsRef.Close} />
        </button>

        <div className='modal-alert__btns__wrapper'>
          <CustomButton styleVariation='flat'>cancel</CustomButton>
          <CustomButton onClick={() => onConfirm()} colorVariation='danger'>
            Yes
          </CustomButton>
        </div>
      </div>
    </div>
  ) : null
}
