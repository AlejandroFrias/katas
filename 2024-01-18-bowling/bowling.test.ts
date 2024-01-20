import { bowlingScore } from './bowling'

describe('Bowling', () => {
  it.each<{
    rolls: (number | '/' | 'X')[],
    score: number
  }>([
    {
      rolls: [],
      score: 0
    },
    {
      rolls: [1],
      score: 1
    },
    {
      rolls: [1, 2],
      score: 3
    },
    {
      rolls: [5, '/'],
      score: 10
    },
    {
      rolls: [5, '/', 3],
      score: 16
    },
    {
      rolls: ['X'],
      score: 10
    },
    {
      rolls: ['X', 4],
      score: 18
    },
    {
      rolls: ['X', 4, 3],
      score: 24
    },
    {
      rolls: ['X', 9, '/', 0],
      score: 30
    },
    {
      rolls: ['X', 'X', 0, 0],
      score: 30
    },
    {
      rolls: [7, '/', 'X', 3, 0],
      score: 36
    },
    {
      rolls: ['X', 'X', 'X', 1, 2],
      score: 67
    },
    {
      rolls: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      score: 300
    },
    {
      rolls: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 0, 0],
      score: 270
    },
    {
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'X', 7, '/'],
      score: 20
    },
    {
      rolls: [0, '/', 'X', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'X', 7, '/'],
      score: 50
    },
    {
      rolls: [0, '/', 'X', 'X', 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'X', 7, '/'],
      score: 87
    },
    {
      rolls: ['X', 'X', 'X', 9],
      score: 87
    },
    {
      rolls: ['X', 'X', 'X', 9, '/'],
      score: 89
    },
    {
      rolls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'X', 9, '/', 'X', 'X', 'X'],
      score: 70
    },
  ])('$rolls = $score', ({ rolls, score }) => {
    expect(bowlingScore(rolls)).toEqual(score)
  })
})