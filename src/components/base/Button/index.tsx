import React from 'react'

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
      <button type="button" {...props} className={`button ${className}`}>
        {children}
      </button>
    </div>
  )
}

export default Button
