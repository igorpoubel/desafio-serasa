import React from "react"

import './style.scss'

interface Props {
  children: React.ReactNode
  className?: string
}

const Button = (componentProps: Props) => {
  const { children, className, ...props } = componentProps
  return <button {...props} className={`theme-button ${className}`}>{children}</button>
}

export default Button