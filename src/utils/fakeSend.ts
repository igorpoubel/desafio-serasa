const fakeSend = (wait: number) => {
  // Using util.promisify would look nicer, but there is a lolex issue
  // blocking this at the moment: https://github.com/sinonjs/lolex/pull/227
  const setTimeoutPromise = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  return setTimeoutPromise(wait)
}

export default fakeSend
