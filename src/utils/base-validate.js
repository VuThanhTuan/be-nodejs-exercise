export default function customizeErrorMessage() {
  return (errors) => {
    // eslint-disable-next-line array-callback-return
    errors.map((err) => {
      switch (err.type) {
        case 'string.min':
          err.message = `${err.context.key} should have at least ${err.context.limit} characters!`
          break
        case 'string.max':
          err.message = `${err.context.key} should have at most ${err.context.limit} characters!`
          break
        case 'number.min':
          err.message = `${err.context.key} should have at least ${err.context.limit} !`
          break
        case 'number.max':
          err.message = `${err.context.key} should have at most ${err.context.limit} !`
          break
        case 'any.empty':
          err.message = `${err.context.key} can not not be empty!`
          break
        case 'any.required':
          err.message = `${err.context.key} is required`
          break
        case 'array.min':
          err.message = `Value should have at least ${err.context.limit} characters!`
          break
        case 'array.unique':
          err.message = `${err.context.label} has been using`
          break
        case 'string.regex.name':
          err.message = `${err.context.label} must be ObjectId`
          break
        default:
          break
      }
    })
    return errors
  }
}
