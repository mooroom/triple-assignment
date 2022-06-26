function easeOutExpo(t: number, b: number, c: number, d: number) {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
}

export const numIncrease = (
  ref: React.RefObject<HTMLHeadingElement>,
  from: number,
  to: number,
  duration: number,
) => {
  const start = new Date().getTime()

  const timer = setInterval(() => {
    const time = new Date().getTime() - start
    const num = Math.ceil(easeOutExpo(time, from, to - from, duration))
    if (ref.current) ref.current.innerText = String(num)
    if (time >= duration) clearInterval(timer)
  }, duration / to)

  if (ref.current) ref.current.innerText = String(from)
}
