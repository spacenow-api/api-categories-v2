'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Category', {
      id: {
        type: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: Sequelize.STRING,
      slug: Sequelize.STRING,
      parentId: {
        type: Sequelize.STRING,
        references: {
          model: Category,
          key: 'id'
        }
      },
      order: Sequelize.INTEGER,
      isActive: Sequelize.BOOLEAN
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Category');
  }
};
