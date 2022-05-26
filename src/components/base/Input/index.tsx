import React from "react"

interface Props {
  label: string
}

const Input = ({label, ...props}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (<div className="theme-input">
    <label>
      <span>{label}</span>
      <input {...props} />
    </label>
  </div>)
}

export default Input
