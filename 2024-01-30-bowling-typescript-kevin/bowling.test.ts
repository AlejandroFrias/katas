import { bowlingScore } from './bowling'

describe('Bowling', () => {
  it('exists, is callable, and returns non-negative number', () => {
    expect(bowlingScore).toBeDefined()
    expect(bowlingScore()).toBeGreaterThan(-1)
  })

  it.each<{ rolls: number[]; score: number }>([
    {
      rolls: [],
      score: 0
    },
    {
      rolls: [2, 3],
      score: 5
    },
    {
      rolls: [10, 2],
      score: 14
    },
    {
      rolls: [10, 2, 3],
      score: 20
    },
    {
      rolls: [10],
      score: 10
    },
    {
      rolls: [3, 7, 5],
      score: 20
    },
    {
      rolls: [0, 10, 5, 1],
      score: 21
    },
  ])(`$rolls => $score`, ({ rolls, score }) => {
    expect(bowlingScore(rolls)).toBe(score)
  })
})