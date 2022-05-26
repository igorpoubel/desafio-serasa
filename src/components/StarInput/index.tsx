import { useState } from "react"
import classNames from "../../utils/classNames"
import Star from "../base/Icons/Star"
import Input from "../base/Input"

import './style.scss'

interface Props {
  nota: number
  setNota: (n: number) => void
}

const StarInput = ({nota, setNota}: Props) => {
  const [hoverNota, setHoverNota] = useState(0)

  const handleEnter = (n: number) => {
    setHoverNota(n)
  }

  const handleLeave = () => {
    setHoverNota(0)
  }

  return <div className="star-input">
    {[...Array(5)].map((el,idx) => {
      const value = idx + 1
      return <Star key={idx} className={classNames("star", hoverNota >= value ? 'hover' : '', nota >= value ? 'checked' : '')} width={32} onMouseEnter={() => handleEnter(value)} onMouseLeave={handleLeave} onClick={() => setNota(nota !== value ? value : 0)} />
    })}
    <Input label='Nota' name='nota' type='hidden' value={nota} />
  </div>
}

export default StarInput
