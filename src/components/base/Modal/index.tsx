import type { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import Backdrop from '../Backdrop'
import Button from '../Button'
import Close from '../Icons/Close'
import Loading from '../Loading'
import './style.scss'

interface Props {
  children: ReactNode
  setClose?: () => void
}

const Modal = ({ children, setClose }: Props) => {
  const body = window?.document?.body

  if (!body) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal">
        {setClose && (
          <button type="button" className="modal-close" onClick={setClose}>
            <Close />
          </button>
        )}
        <div className="modal-content">{children}</div>
      </div>
      <Backdrop />
    </>,
    body
  )
}

export default Modal
