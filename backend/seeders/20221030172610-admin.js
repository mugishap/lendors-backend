'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Admin', [{
      names: 'Mugisha Precieux',
      email:'precieuxmugisha@gmail.com',
      telephone:'+250782307144',
      joined:toString(Date.now()),
      role:'admin',
      password:'sample@123'
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
