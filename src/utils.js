const omitProps = (obj, ...props) => {
  const newObj = {}

  for (const prop in obj) {
    if (!props.includes(prop)) {
      newObj[prop] = obj[prop]
    }
  }

  return newObj
}

const pickProps = (obj, ...props) => {
  const newObj = {}

  for (const prop in obj) {
    if (props.includes(prop)) {
      newObj[prop] = obj[prop]
    }
  }

  return newObj
}

module.exports = {
  omitProps,
  pickProps
}
