'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pedidos', 
    [
      {"juegoId":7,"usuarioId":9,"fecha_alquiler":"2021-10-11","fecha_devolucion":"2021-10-26","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
      {"juegoId":4,"usuarioId":12,"fecha_alquiler":"2021-10-05","fecha_devolucion":"2021-10-20","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
      {"juegoId":17,"usuarioId":26,"fecha_alquiler":"2021-10-08","fecha_devolucion":"2021-10-23","createdAt":"2021-10-28","updatedAt":"2021-10-28"}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('pedidos', null, {});

  }
};