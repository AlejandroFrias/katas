import { bowling } from './bowling'

describe('bowling', () => {
  it.each<{ rolls: number[], expectedScore: number }>([
    { rolls: [], expectedScore: 0 },
    { rolls: [1], expectedScore: 1 },
    { rolls: [3, 4], expectedScore: 7 },
    { rolls: [10, 4], expectedScore: 18 },
    { rolls: [10], expectedScore: 10 },
    { rolls: [10, 4, 5], expectedScore: 28 },
    { rolls: [0, 0, 10, 4, 5], expectedScore: 28 },
    { rolls: [5, 5, 5], expectedScore: 20 },
    { rolls: [5, 5, 5, 1], expectedScore: 21 },
    { rolls: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], expectedScore: 300 },
    { rolls: [10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 1, 9], expectedScore: 278 },
  ])('exists', ({ rolls, expectedScore }) => {
    expect(bowling(rolls)).toEqual(expectedScore)
  })
})