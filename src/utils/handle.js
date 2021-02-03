export default async function returnError(res, data, e) {
  if (e) {
    return res.status(400).json({
      isSuccess: false,
      status: 400,
      code: e.code,
      message: e.message || 'Have error', // Get message from new Error()
    })
  }

  return res.json({
    isSuccess: true,
    status: 200,
    data
  })
}
