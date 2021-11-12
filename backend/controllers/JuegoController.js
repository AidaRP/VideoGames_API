//Importación a la BBDD
const db = require("../models");
const juegos = db.juego;
const Op = db.Sequelize.Op; //Importación de las funciones ORM de Sequelize.

const JuegoController = {}; //Creaación del objeto del controlador



//Hacemos el CRUD de las funciones end-point.
//-------------------------------------------------------------------------------------
//Hacemos un GET de todos los juegos
JuegoController.getAll = (req, res) => {
    
    juegos.findAll({include: [{ model:categoryModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido un error al intentar acceder a los Videojuegos."
        });
      });
  };


//-------------------------------------------------------------------------------------
//Hacemos un GET para recibir los juegos por ID.
JuegoController.getById = (req, res) => {
    const id = req.params.id;

    juegos.findByPk(id, {include: [{ model:categoryModel}]})
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
          message: "Ha surgido un error al intentar acceder al Videojuego con el id " + id + "."
        });
      });
  };



//-------------------------------------------------------------------------------------
//Creacion de un nuevo juego en la BBDD
JuegoController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Crear un juego
    const newJuego = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    // Guardar un juego en la BBDD
    juegos.create(newJuego)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algún error ha ocurrido mientras se creaba un juego."
        });
      });
  };


//-------------------------------------------------------------------------------------
//Actualizar un Juego en la BBDD
JuegoController.update = (req, res) => {
    const id = req.params.id;
  
    juegos.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "EL juego ha sido actualizao exitosamente."
          });
        } else {
          res.send({
            message: `No se ha podido actualizar el juego con el id=${id}. ¡Quizás no se encontró el videojuego o el ${req.body} está vacío!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al actualizar el juego con el id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//Obtenido el juego con el titulo de la BBDD 
//Encontrar por titulo
  JuegoController.getByTitle = (req, res) => {
    juegos.findAll({ where: { title: req.params.title } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar el titulo ."
        });
      });
  };


//-------------------------------------------------------------------------------------
//Eliminar un juego de la BBDD
JuegoController.delete = (req, res) => {
    const id = req.params.id;
  
    juegos.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "El juego fue eliminado exitosamente!"
          });
        } else {
          res.send({
            message: `No se ha podido eliminar el juego con el id=${id}. Quizá el juego no fue encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo eliminar el juego con el id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//Elimina todos los juegos de la BBDD.
//Elimina todos los juegos.
  JuegoController.deleteAll = (req, res) => {
    juegos.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Los juegos fueron eliminados exitosamente!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algún error ha ocurrido eliminando todos los juegos."
        });
      });
  };

module.exports = JuegoController;