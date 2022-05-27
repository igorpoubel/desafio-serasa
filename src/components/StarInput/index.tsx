import { useState } from 'react'

import classNames from '../../utils/classNames'
import Star from '../base/Icons/Star'
import Input from '../base/Input'

import './style.scss'

interface Props {
  label: string
  nota: number
  setNota: (n: number) => void
  isValid?: boolean
  errorMessage?: string
  ariaErrorMessage?: string
}

function StarInput({
  label,
  nota,
  isValid,
  errorMessage,
  ariaErrorMessage,
  setNota,
}: Props) {
  const [hoverNota, setHoverNota] = useState(0)

  const handleEnter = (n: number) => {
    setHoverNota(n)
  }

  const handleLeave = () => {
    setHoverNota(0)
  }

  // eslint-disable-next-line react/jsx-filename-extension
  return (
    <div
      className={classNames(
        'star-wrapper',
        'input-space',
        'input-100w',
        !isValid ? 'input-error' : ''
      )}
    >
      {label && (
        <h5 className="input-label" aria-label={label}>
          {label}{' '}
          {!isValid && (
            <span
              aria-details={ariaErrorMessage}
              className="input-error-message"
            >
              {errorMessage}
            </span>
          )}
        </h5>
      )}
      <div className="star-input">
        {[...Array(5)].map((_el, idx) => {
          const value = idx + 1

          return (
            <button
              key={idx}
              className="star-button"
              type="button"
              aria-label={`nota ${value}`}
              onMouseEnter={() => handleEnter(value)}
              onFocus={() => handleEnter(value)}
              onMouseLeave={handleLeave}
              onBlur={handleLeave}
              onClick={() => setNota(nota !== value ? value : 0)}
            >
              <Star
                className={classNames(
                  'star',
                  hoverNota >= value ? 'hover' : '',
                  nota >= value ? 'checked' : ''
                )}
                width={32}
              />
            </button>
          )
        })}
        <Input name="nota" type="hidden" aria-hidden value={nota} />
      </div>
    </div>
  )
}

export default StarInput
