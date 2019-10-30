'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    slug: {
      type: DataTypes.STRING,
      field: 'slug'
    },
    parentId: {
      type: DataTypes.UUID,
      field: 'parent_id',
      defaultValue: DataTypes.UUIDV4,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    order: {
      type: DataTypes.INTEGER,
      field: 'order',
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
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
    tableName: 'category',
    indexes: [
      {
        unique: true,
        fields: ['id']
      }
    ]
  });

  Category.associate = (models) => {
    Category.hasMany(models.Category, {
      as: 'children',
      foreignKey: 'parent_id'
    });
  };

  Category.beforeCreate((instance) => {
    const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
    const b = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
    const p = new RegExp(a.split("").join("|"), "g");
    instance.slug = instance.name
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(p, c => b.charAt(a.indexOf(c)))
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  })

  Category.beforeUpdate((instance) => {
    const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
    const b = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
    const p = new RegExp(a.split("").join("|"), "g");
    instance.slug = instance.name
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(p, c => b.charAt(a.indexOf(c)))
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  })

  return Category;
};