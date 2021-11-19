'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('juegos', [
        {
        id: 5,
        titulo:"Persona 5:Royal",
        año:"2020",
        consola:"PS4",
        genero:"Acción",
        ciudad:"Castellón",
        alquilada:false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      id: 15,
      titulo:"Red Dead Redemption 2",
      año:"2010",
      consola:"PS4",
      genero:"Rol",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:25,
      titulo:"Half-Life: Alyx",
      año:"2020",
      consola:"PC",
      genero:"Acción",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },

     {
      id:35,
      titulo:"The Legend of Zelda: Breath of the Wild",
      año:"2017",
      consola:"Nintendo Switch",
      genero:"Aventura",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },   
     {
      id:45,
      titulo:"Super Mario Odyssey",
      año:"2017",
      consola:"Nintendo Switch",
      genero:"Carreras",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:55,
      titulo:"The Legend of Zelda: Ocarina of Time 3D",
      año:"2011",
      consola:"Nintendo 3DS",
      genero:"Aventura",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:65,
      titulo:"Super Smash Bros. Ultimate",
      año:"2018",
      consola:"Nintendo Switch",
      genero:"Lucha",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:75,
      titulo:"Persona 4 Golden",
      año:"2013",
      consola:"PSVITA",
      genero:"Rol",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:85,
      titulo:"The Last of Us",
      año:"2014",
      consola:"PS4",
      genero:"Acción",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:95,
      titulo:"Persona 5",
      año:"2017",
      consola:"PS4",
      genero:"Lucha",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:105,
      titulo:"Grand Theft Auto V",
      año:"2013",
      consola:"PS3",
      genero:"Acción",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:115,
      titulo:"Forza Horizon 4",
      año:"2018",
      consola:"XBOne",
      genero:"Carreras",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:125,
      titulo:"Portal 2",
      año:"2011",
      consola:"PC",
      genero:"Aventura",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:135,
      titulo:"God Of War",
      año:"2018",
      consola:"PS4",
      genero:"Accion",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:145,
      titulo:"Half-Life 2",
      año:"2004",
      consola:"PC",
      genero:"Shooter",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:155,
      titulo:"StarCraft II: Wing of Liberty",
      año:"2010",
      consola:"PC",
      genero:"Accion",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:165,
      titulo:"The Elder Scrolls V: Skyrim",
      año:"2011",
      consola:"PC",
      genero:"Accion",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:175,
      titulo:"Sekiro. Shadows Die Twice",
      año:"2019",
      consola:"XBOne",
      genero:"Accion",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:185,
      titulo:"BioShock",
      año:"2007",
      consola:"PC",
      genero:"Lucha",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },

      {
      id:195,
      titulo:"Divinity: Original Sin II",
      año:"2014",
      consola:"PC",
      genero:"Rol",
      ciudad:"Alicante",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:205,
      titulo:"Super Mario Bros. 3 CV",
      año:"2013",
      consola:"3DS",
      genero:"Carreras",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },   
     {
      id: 215,
      titulo:"The Witcher3: Wild Hunt",
      año:"2015",
      consola:"PC",
      genero:"Aventura",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:225,
      titulo:"Divinity: Original Sin II",
      año:"2014",
      consola:"XBOne",
      genero:"Rol",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      id:235,
      titulo:"Mass Effect 2",
      año:"2010",
      consola:"PC",
      genero:"Shooter",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      id:245,
      titulo:"Uncharted 4: El Desenlace del Ladrón ",
      año:"2016",
      consola:"PS4",
      genero:"Aventura",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:255,
      titulo:"The Last of Us Parte II",
      año:"2020",
      consola:"PS4",
      genero:"Aventura",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
       id:265,
      titulo:"Ori and the Will of the Wisps",
      año:"2020",
      consola:"XBOne",
      genero:"Accion",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },   
     {
       id:275,
      titulo:"Astro Bot Rescue Mission",
      año:"2018",
      consola:"PS4",
      genero:"Aventura",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
       id:285,
      titulo:"Undertale",
      año:"2015",
      consola:"PC",
      genero:"Accion",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:295,
      titulo:"Fire Emblem: Awakening",
      año:"2013",
      consola:"3DS",
      genero:"Aventura",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:305,
      titulo:"Bloodborne",
      año:"2015",
      consola:"PS4",
      genero:"Lucha",
      ciudad:"Valencia",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:315,
      titulo:"BioShock Infinite",
      año:"2013",
      consola:"PC",
      genero:"Aventura",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:325,
      titulo:"Celeste",
      año:"2019",
      consola:"XBOne",
      genero:"Aventura",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:335,
      titulo:"Doom Eternal",
      año:"2020",
      consola:"XBOne",
      genero:"Lucha",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id:345,
      titulo:"Dark Souls III",
      año:"2020",
      consola:"XBOne",
      genero:"Carreras",
      ciudad:"Castellón",
      alquilada:false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('juegos', null, {});
     
  }
};
