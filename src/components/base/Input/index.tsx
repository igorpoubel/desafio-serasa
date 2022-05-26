import React from 'react'

import './style.scss'

interface Props {
  label?: string
}

const Input = ({
  label,
  type,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="input input-space input-100w">
      {label && (
        <label className="input-label" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input type={type || 'text'} {...props} />
    </div>
  )
}

export default Input
