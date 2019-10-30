const categoryAttributeService = require('../../services/category-attribute.service')
const r = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  const { id, typeId = "cf3d01e7-1f29-4159-90bb-76fcf37f58de" } = event.pathParameters
  const { pageIndex = 0, pageSize = 10 } = event.queryStringParameters
  context.callbackWaitsForEmptyEventLoop = false
  categoryAttributeService
    .getCategoryAttributes(pageIndex, pageSize, id, typeId)
    .then((data) => callback(null, r.success(data)))
    .catch((err) => callback(null, r.failure(err)))
}