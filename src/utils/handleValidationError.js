import ev from 'express-validation'

// eslint-disable-next-line no-unused-vars
export function handleValidationError(error, req, res, _) {
  if (error instanceof ev.ValidationError) {
    return res.status(error.status).json({
      code: error.status,
      message: error.errors[0].messages[0].split('"').join('').split('undefined').join('')
    })
  }
}
