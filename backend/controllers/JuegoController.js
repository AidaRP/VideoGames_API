//Importo modelo de datos
const db = require("../models");
const juegos = db.juego;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var categoryModel  = require('../models').category;  //Add for dependency response

const JuegoController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all juegos from database
JuegoController.getAll = (req, res) => {
    
    juegos.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving juegos."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET juegos by Id from database
JuegoController.getById = (req, res) => {
    const id = req.params.id;

    juegos.findByPk()
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving juegos with id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE a new juego in database
JuegoController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Juegos
    const newJuego = {
      titulo: req.body.titulo,
      año: req.body.año,
      consola: req.body.consola,
      genero: req.body.genero,
      ciudad: req.body.ciudad,
      alquilada: req.body.alquilada

    };
  
    // Save Juegos in the database
    juegos.create(newJuego)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Juego."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a juego from database
JuegoController.update = (req, res) => {
    const id = req.params.id;
  
    juegos.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Juego was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Juego with id=${id}. Maybe Juego was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Juego with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET juego by Title from database 
//FindByTitle
  JuegoController.getByTitle = (req, res) => {
    juegos.findAll({ where: { title: req.params.title } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE a juego by Id from database
JuegoController.delete = (req, res) => {
    const id = req.params.id;
  
    juegos.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Juego was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Juego with id=${id}. Maybe Juego was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Juego with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all juegos from database
//delete all juegos 
  JuegoController.deleteAll = (req, res) => {
    juegos.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Juegos were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all juegos."
        });
      });
  };

module.exports = JuegoController;