const validation = require('./validation');

const sort = str => {
  validation(str)
  return str.split(' ').map(word => [...word.toLowerCase()].sort().join('')).join(' ')
}

module.exports = sort;