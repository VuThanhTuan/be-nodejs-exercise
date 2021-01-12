const badRequestError = {
    ValidateError: 'Validate Error',
    MissingName: 'Name can not be empty',
    InvalidPassword: 'Invalid password',
    ErrorEmpty: 'Error Empty'
}

const notFoundError = {
    UserNotFound: 'User Not Found',

    TypeNotFound: 'Type product not found',
    ProductNotFound: 'Product not found',
    CateNotFound: 'Category product note found'
}

const errorResponse = {
    create: 'Create failed!',
    permission: ' You are not author',
    update: 'Update failed!',
    destroy: 'Delete failed!',
    show: 'Not Found!',
    limit: 'File size must be smaller 5MB',
    invalidFile: 'File format must be png or jpg or gif or jpeg!',
    menu: 'Name or section fields already existed'
}
const dataAlreadyExisted = {
    message: 'Data is already existed'
}
export default {
    badRequestError,
    notFoundError,
    errorResponse,
    dataAlreadyExisted
}