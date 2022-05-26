const classNames = (...args: string[]) => {
  return args.filter(c => c !== '').join(' ')
}

export default classNames
