'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('category_attribute', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      attribute_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      category_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
      .then(() => queryInterface.addConstraint('category_attribute', ['category_id'], {
        type: 'foreign key',
        name: 'fk_category_attribute_category_id',
        references: {
          table: 'category',
          field: 'id'
        }
      }))
      .then(() => queryInterface.addConstraint('category_attribute', ['attribute_id'], {
        type: 'foreign key',
        name: 'fk_category_attribute_attribute_id',
        references: {
          table: 'eav_attribute',
          field: 'id'
        }
      }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('category');
  }
};