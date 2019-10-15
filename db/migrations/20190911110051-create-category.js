'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('category', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: Sequelize.STRING,
      slug: Sequelize.STRING,
      parent_id: Sequelize.UUID,
      order: {
        type: Sequelize.INTEGER
      },
      is_active: Sequelize.BOOLEAN,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('category', ['parent_id'], {
      type: 'foreign key',
      name: 'fk_cat_id',
      references: {
        table: 'category',
        field: 'id'
      }
    }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('category');
  }
};