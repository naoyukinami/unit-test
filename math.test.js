const { addition } = require('./addition');

test('2 + 3 = 5', () => {
    expect(addition(2,3)).toBe(5)
})

test('2 + 1 = 3', () => {
    expect(addition(2,1)).toBe(3)
})

test('23 + 32 = 55', () => {
    expect(addition(23,32)).toBe(55)
})

test.skip('10 + 90 = 100', () => {
    expect(addition(10, 90)).toBe(100)
})