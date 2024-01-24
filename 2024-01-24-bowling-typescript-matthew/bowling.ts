

export const bowling = (rolls: number[]) => {
  const getRoll = (index) => rolls[index] ?? 0

  let total = 0
  let startOfFrame = true
  let frameNumber = 1
  rolls.forEach((roll, index) => {
    if (frameNumber > 10) {
      return
    }
    total += roll
    if (roll === 10 && startOfFrame) {
      total += getRoll(index + 1) + getRoll(index + 2)
    } else if (roll + getRoll(index - 1) === 10 && !startOfFrame) {
      total += getRoll(index + 1)
      startOfFrame = true
    } else {
      startOfFrame = !startOfFrame
    }
    if (startOfFrame) frameNumber++
  })


  return total
}