'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryAttribute = sequelize.define('CategoryAttribute', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      field: 'id'
    },
    categoryId: {
      type: DataTypes.UUID,
      field: 'category_id',
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    attributeId: {
      type: DataTypes.UUID,
      field: 'attribute_id',
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: 'Attribute',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    tableName: 'category_attribute',
    indexes: [
      {
        unique: true,
        fields: ['category_id']
      },
      {
        unique: true,
        fields: ['attribute_id']
      }
    ]
  });
  
  return CategoryAttribute;
};