'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
      return queryInterface.addColumn('ongs', 'confirmed', 
      { 
      type: Sequelize.BOOLEAN,
      defaultValue: false 
      });
 
  },

  down: ( ) => {
 
  }
};
