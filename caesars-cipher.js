const getIndex = (alpha, char) => {
  const currIndex = alpha.findIndex(a => a === char)

  if (currIndex + 13 > 25) {
    return (currIndex + 13) - 26
  } else return currIndex + 13
}

function rot13(str) {
  const alphaArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const newStringArray = []
  const regex = /\w/
  for(let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      newStringArray.push(alphaArray[getIndex(alphaArray, str[i])])
    } else {
      newStringArray.push(str[i])
    }
  }
  
  return newStringArray.join('');
}
