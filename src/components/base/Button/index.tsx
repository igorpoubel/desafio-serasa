import React from 'react'
import classNames from 'utils/classNames'

import './style.scss'

interface Props {
  children: React.ReactNode
}

const Button = ({
  children,
  className,
  ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="input-100w">
      <button
        type="button"
        {...props}
        className={classNames('button', `${className || ''}`)}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
