const trimProps = (obj, ...props) => {
  const newObj = {}

  for (let prop in obj) {
    if (!props.includes(prop)) {
      newObj[prop] = obj[prop]
    }
  }

  return newObj
}

module.exports = {
  trimProps
}
