import { bowling } from './bowling'

describe('bowling', () => {
  it('is callable', () => {
    expect(() => bowling([])).not.toThrow()
  })

  it.each<{ rolls, score }>([
    { rolls: [], score: 0 },
    { rolls: [1], score: 1 },
    { rolls: [1, 2], score: 3 },
    { rolls: [1, 2, 4], score: 7 },
    { rolls: [10, 2], score: 14 },
    { rolls: [10, 3], score: 16 },
    { rolls: [10], score: 10 },
    { rolls: [10, 1, 1], score: 14 },
    { rolls: [0, 0, 10, 1, 1], score: 14 },
    { rolls: [0, 0, 10, 10, 1], score: 33 },
    { rolls: [7, 3, 3], score: 16 },
    { rolls: [1, 9, 3], score: 16 },
    { rolls: [0, 10, 0, 9], score: 19 },
    { rolls: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], score: 300 },
    { rolls: [10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 1, 10], score: 279 },
  ])('$rolls => $score', ({ rolls, score }) => {
    expect(bowling(rolls)).toBe(score)
  })
})