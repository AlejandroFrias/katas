/**
 * @param rolls list of rolls, numbers only
 * @returns score so far, even if in middle of frame
 */
export const bowlingScore = (rolls: number[] = []): number => {
  function getRoll(index) { return rolls[index] || 0 }

  let score = 0
  rolls.forEach((roll, i) => {
    score += roll
    const isSpare = (roll === 0 && getRoll(i + 1) === 10) || (roll + getRoll(i + 1) === 10)
    const isStrike = roll === 10
    if (isSpare) {
      score += getRoll(i + 2)
    } else if (isStrike) {
      score += getRoll(i + 1) + getRoll(i + 2)
    }
  })
  return score
}