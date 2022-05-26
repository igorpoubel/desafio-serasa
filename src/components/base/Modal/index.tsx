import type { ReactNode } from 'react'
import ReactDOM from 'react-dom'

import Backdrop from '../Backdrop'
import Loading from '../Loading'
import './style.scss'

interface Props {
  children: ReactNode
}

const Modal = ({ children }: Props) => {
  const body = window?.document?.body

  if (!body) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal">{children}</div>
      <Backdrop />
    </>,
    body
  )
}

export default Modal
