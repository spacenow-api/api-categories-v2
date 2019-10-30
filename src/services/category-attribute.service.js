'use strict'

const { CategoryAttribute } = require('../../db/models')
const paginate = require('../helpers/paginate.utils')

const getCategoryAttributes = async (pageIndex = 0, pageSize = 10, id, typeId = "cf3d01e7-1f29-4159-90bb-76fcf37f58de") => {
  const where = { where: { categoryId: id }, ...paginate(pageIndex, pageSize) }
  try {
    const data = await CategoryAttribute.findAndCountAll(where)
    return data
  } catch (error) {
    throw error
  }
}

const getCategoryAttribute = async (id) => {
  const where = { where: { id } }
  try {
    const data = await CategoryAttribute.findOne(where);
    return data
  } catch (error) {
    throw error
  }
}

const putCategoryAttribute = async (id, value) => {
  const where = { where: { id } }
  try {
    const valueToUpdate = await CategoryAttribute.findOne(where);
    if (!valueToUpdate) throw new Error(`CategoryAttribute ${id} not found.`);
    await CategoryAttribute.update(value, where)
    return Object.assign(valueToUpdate, value)
  } catch (error) {
    throw error
  }
}

const postCategoryAttribute = async (value) => {
  try {
    const data = await CategoryAttribute.create(value)
    return data
  } catch (error) {
    throw error
  }
}

const deleteCategoryAttribute = async (id) => {
  const where = { where: { id } }
  try {
    const valueToUpdate = await CategoryAttribute.findOne(where);
    if (!valueToUpdate) throw new Error(`CategoryAttribute ${id} not found.`);
    await CategoryAttribute.delete(where)
    return Object.assign(`CategoryAttribute ${id} deleted.`)
  } catch (error) {
    throw error
  }
}


module.exports = { getCategoryAttributes, getCategoryAttribute, putCategoryAttribute, postCategoryAttribute, deleteCategoryAttribute }