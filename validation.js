const validation = str => {
  if(typeof(str) !== 'string') {
    throw('No string passed')
  }

  if([...str.matchAll(/[^а-яa-z\s]/gi)].length > 0)
    throw('The string contains forbidden characters')

  if(str.trim().length <= 0) {
    throw('Empty line')
  }
}

module.exports = validation