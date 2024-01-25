import { scoreBowling } from './bowling'

describe('scoreBowling()', () => {
  it('exists', () => {
    expect(scoreBowling).toBeDefined()
  })
  it('is a function', () => {
    expect(() => scoreBowling([])).not.toThrow()
  })
  it('returns a number', () => {
    expect(typeof scoreBowling([])).toBe('number')
  })
  it.each<{
    rolls: number[]
    score: number
  }>([
    { rolls: [1], score: 1 },
    { rolls: [2, 3], score: 5 },
    { rolls: [10, 3], score: 16 },
    { rolls: [10, 6], score: 22 },
    { rolls: [10, 6, 3], score: 28 },
    { rolls: [1, 9, 4], score: 18 },
    { rolls: [10], score: 10 },
    { rolls: [0, 1, 9, 1], score: 11 },
    { rolls: [10, 1, 9, 1], score: 32 },
    { rolls: [0, 10, 1, 1], score: 13 },
  ])('returns the bowling score', ({ rolls, score }) => {
    expect(scoreBowling(rolls)).toBe(score)
  })
})