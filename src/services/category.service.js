'use strict'

const { Category } = require('../../db/models')
const paginate = require('../helpers/paginate.utils')

const getCategories = async (pageIndex = 0, pageSize = 10) => {
  const order = [['order']];
  try {
    const data = await Category.findAndCountAll({ ...paginate(pageIndex, pageSize), order })
    return data
  } catch (error) {
    throw error
  }
}

const getRootCategories = async () => {
  const order = [['order']];
  const where = { where: { parentId: null }, order };
  try {
    const data = await Category.findAndCountAll(where)
    return data
  } catch (error) {
    throw error
  }
}

const getCategory = async (id) => {
  const where = {
    where: { id },
    include: [{
      model: Category,
      as: "children",
      order: [['order']]
    }]
  }
  try {
    const data = await Category.findOne(where);
    return data
  } catch (error) {
    throw error
  }
}

const postCategory = async (value) => {
  try {
    const data = await Category.create(value)
    return data
  } catch (error) {
    throw error
  }
}

const putCategory = async (id, value) => {
  try {
    const valueToUpdate = await Category.findOne({ where: { id } });
    if (!valueToUpdate) throw new Error(`Category ${id} not found.`);
    await Category.update(value, { where: { id } })
    return Object.assign(valueToUpdate, value)
  } catch (error) {
    throw error
  }
}

module.exports = { getCategories, getRootCategories, getCategory, postCategory, putCategory }