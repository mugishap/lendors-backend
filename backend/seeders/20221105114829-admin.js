'use strict';

const { v4 } = require('uuid');
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */

const generateHasedPassword = async() =>{
  const hashed = await bcrypt.hash("admin@pass", 8)
  return hashed;
}

module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: v4(),
      names: "Ndayambaje Patrick",
      email: 'patrickndayambaje@gmail.com',
      role: 'admin',
      joined: Date.now(),
      password: await generateHasedPassword(),
      address: "Kigali, Rwanda",
      telephone: "+250782307144",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
