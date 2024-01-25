/**
 * @description Calculates the score of a bowling game
 * @param {number[]} rolls signifies each roll's number of pins
 * @returns {number} the score of the game
 */
export const scoreBowling = (rolls: number[]): number => {
  let score = 0

  // Helper function to do null checks when getting a roll value
  // defaulting to 0 if the roll is undefined
  function getRoll(index) { return rolls[index] || 0 }

  let startOfFrame = true
  rolls.forEach((roll, index) => {
    score += roll
    if (roll === 10 && startOfFrame) {
      score += getRoll(index + 1) + getRoll(index + 2)
    } else if (!startOfFrame && roll + getRoll(index - 1) === 10) {
      score += getRoll(index + 1)
      startOfFrame = true
    } else {
      startOfFrame = !startOfFrame
    }
  })
  return score
}