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
        <h5 className="input-label" aria-label={label}>
          {label}
        </h5>
      )}
      <input type={type || 'text'} {...props} />
    </div>
  )
}

export default Input
