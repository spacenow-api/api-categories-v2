const categoryAttributeService = require('../../services/category-attribute.service')
const r = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  const { id } = event.pathParameters
  const { pageIndex = 0, pageSize = 10 } = event.queryStringParameters
  context.callbackWaitsForEmptyEventLoop = false
  categoryAttributeService
    .getCategoryAttributes(pageIndex, pageSize, id)
    .then((data) => callback(null, r.success(data)))
    .catch((err) => callback(null, r.failure(err)))
}