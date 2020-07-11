const typeCheck = {
  getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
  },
}

const types = ['String', 'Array', 'Number', 'Boolean', 'Object', 'NaN', 'Undefined', 'Function', 'Date', 'RegExp', 'JSON']

types.forEach(type => {
  typeCheck[`is${type}`] = value => typeCheck.getType(value) === type
})

export default typeCheck