import React from "react"

import './style.scss'

interface Props {
  children: React.ReactNode
}

const Button = ({ children, className, ...props }: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={`theme-button ${className}`}>{children}</button>
}

export default Button
