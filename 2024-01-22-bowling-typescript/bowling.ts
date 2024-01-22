export const bowling = (rolls: number[]) => {
  const scores: number[] = []
  let firstRollOfFrame = true
  let frameNumber = 1
  rolls.forEach((roll, index) => {
    if (roll === 10) {
      scores.push((rolls[index + 1] || 0) + (rolls[index + 2] || 0))
      frameNumber += 1
    } else if (!firstRollOfFrame) {
      firstRollOfFrame = true
      frameNumber += 1
    } else if (roll + rolls[index - 1] === 10) {
      scores.push((rolls[index + 1] || 0))
      firstRollOfFrame = false
    }
    if (frameNumber <= 10) {
      scores.push(roll)
    }
  })
  return scores.reduce((sum, score) => sum + score, 0)
}