// turn order:
// Alejandro
// Kevin
// Simon
// Brandon
// Matthew
import { bowling } from './bowling'

describe('bowling', () => {
    it('exists', () => {
        expect(bowling).toBeDefined()
        expect(bowling([])).toEqual(expect.any(Number))
    })
    it('it returns score of 1 when only knocked down one pin', () => {
        expect(bowling([1])).toEqual(1)
    })
    it('it returns total of two rolls', () => {
        expect(bowling([4, 4])).toEqual(8)
    })
    it('returns 10 if scored a strike', () => {
        expect(bowling(['X'])).toEqual(10)
    })
    it('calculates bonus strike points for following roll', () => {
        expect(bowling(['X', 3])).toEqual(16)
    })
    it('calculates bonus strike pointes for following roll which is also a strike', () => {
        expect(bowling(['X', 'X', 3])).toEqual(39)
    })
})
