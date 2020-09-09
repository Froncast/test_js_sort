const validation = require('../validation')

test('should throw an error on invalid data', () => {
  expect(() => validation(139693).toThrowError())
  expect(() => validation('').toThrowError())
  expect(() => validation('         ').toThrowError())
  expect(() => validation('/..    ').toThrowError())
  expect(() => validation('a + b;').toThrowError())
  expect(() => validation("artemiy1-139693:").toThrowError())
})