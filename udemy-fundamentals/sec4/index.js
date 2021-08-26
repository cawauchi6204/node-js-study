const parent = () => {
  console.log('parent() is called')
  child()
  console.log('parent() is executed')
}

const child = () => {
  console.log('child() is called')
  console.log('child() is executed')
}

parent()
