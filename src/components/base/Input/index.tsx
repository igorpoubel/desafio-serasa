import React from 'react'
import classNames from 'utils/classNames'

import './style.scss'

interface Props {
  label?: string
  isValid?: boolean
  errorMessage?: string
  ariaErrorMessage?: string
}

const Input = ({
  label,
  type,
  isValid,
  errorMessage,
  ariaErrorMessage,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div
      className={classNames(
        'input',
        'input-space',
        'input-100w',
        !isValid ? 'input-error' : ''
      )}
    >
      {label && (
        <label className={classNames('input-label')} htmlFor={props.id}>
          {label}{' '}
          {!isValid && (
            <span
              aria-details={ariaErrorMessage}
              className="input-error-message"
            >
              {errorMessage}
            </span>
          )}
        </label>
      )}
      <input type={type || 'text'} {...props} />
    </div>
  )
}

export default Input
