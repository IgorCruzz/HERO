'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
      return queryInterface.addColumn('incidents', 'file', 
      { 
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id'},
        onDelete: 'CASCADE'
      }); 
  },

  down: () => {}
};
