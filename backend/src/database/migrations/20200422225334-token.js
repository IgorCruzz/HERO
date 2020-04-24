'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.createTable('tokens', { 
        id: {
          type: Sequelize.INTEGER,
          references: { model: 'ongs', key: 'id'},
          onDelete: 'CASCADE',
          allowNull: false,
          primaryKey: true
        },
      token: {
        type: Sequelize.STRING,
        allowNull: false
      },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
  });
 
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.dropTable('users');
 
  }
};
