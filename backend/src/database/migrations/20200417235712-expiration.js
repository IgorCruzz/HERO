'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('ongs', 'reset_password_expiration',
      { 
        type: Sequelize.STRING,         
      });
   
  },

  down: () => { 
  }
};
