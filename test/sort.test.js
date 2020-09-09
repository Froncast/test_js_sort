const sort = require('../sort')

test('Should return text in which the letters of the words are sorted alphabetically', () => {
  expect(sort('lemon orange banana apple')).toBe('elmno aegnor aaabnn aelpp');
  expect(sort('лимон апельсин банан яблоко')).toBe('илмно аеилнпсь аабнн бклооя');
  expect(sort('Lorem Ipsum Dolor sit amet')).toBe('elmor impsu dloor ist aemt');
  expect(sort('ЖИЗНЬ ВЗГЛЯД ГЛАЗА УЛЫБКА СМЕХ')).toBe('жзинь вгдзля аагзл абклуы емсх');
});