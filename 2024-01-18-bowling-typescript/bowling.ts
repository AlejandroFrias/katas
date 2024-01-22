export const bowlingScore = (rolls: (number | '/' | 'X')[]) => {
  let score = 0
  let spare = false
  let strike = false
  let prev = 0
  let rollNum = 1
  rolls.forEach((roll) => {
    const rollValue = roll === 'X' ? 10 : roll === '/' ? 10 - prev : roll
    if (rollNum <= 20) {
      score += rollValue
    }
    if (spare) score += rollValue
    if (strike) score += rollValue

    switch (roll) {
      case '/':
        spare = true
        break;
      case 'X':
        if (spare) spare = false
        if (rollNum <= 20) {
          if (strike) spare = true
          strike = true
          rollNum += 1
        }
        break;
      default:
        if (strike) {
          spare = true
          strike = false
        } else if (spare) {
          spare = false
        }
        break;
    }
    prev = rollValue
    rollNum += 1
  })
  return score
}