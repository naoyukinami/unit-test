const { addition } = require('./addition');

test('2 + 3 = 5', () => {
    expect(addition(2,3)).toBe(5)
})

test.skip('10 + 90 = 100', () => {
    expect(addition(10, 90)).toBe(100)
})