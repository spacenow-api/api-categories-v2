const categoryService = require('../../services/category.service')
const r = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  categoryService
    .getRootCategories()
    .then((data) => callback(null, r.success(data)))
    .catch((err) => callback(null, r.failure(err)))
}