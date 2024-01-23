export const bowling = (rolls: (number | 'X')[]): number => {
  const scores = rolls.map((roll, i) => {
    if (roll === 'X') {
      let next = rolls[i + 1] || 0
      return 10 + (next === 'X' ? 10 : next)
    }
    return roll
  })
  return scores.reduce((acc, cur) => acc + cur, 0)
}