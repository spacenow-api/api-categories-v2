const categoryService = require('../../services/category.service')
const r = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  const { pageIndex = 0, pageSize = 10 } = event.queryStringParameters
  context.callbackWaitsForEmptyEventLoop = false
  categoryService
    .getCategories(pageIndex, pageSize)
    .then((data) => callback(null, r.success(data)))
    .catch((err) => callback(null, r.failure(err)))
}