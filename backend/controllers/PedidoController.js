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
    
    juegos.findAll({include: [{ model:categoryModel}]})
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
          message: "Error retrieving juegos with id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE a new juegos in database
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
      title: req.body.title,
      categoryId: req.body.categoryId
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

if (req.user.usuario.rol == "administrador") {// Único permiso de eliminación al administrador

const id = req.params.id;

let idJuego = 0;

//Buscamos el pedido que queremos eliminar y sacamos el juego que está guardado en el pedido 
pedido.findByPk(id)
  .then(data => {
      if (data) {
          idJuego = data.juegoId
          res.send(data);
      } else {
          res.status(404).send({
              message: `No se puede encontrar el pedido con el id ${id}.`
          });
      }
  })
  .catch(err => {
      res.status(500).send({
          message: "Ha surgido algún error al intentar acceder al pedido con el id " + id
      });
  });

//Eliminación del pedido
pedido.destroy({ where: { id: id }})
.then(num => {
    if (num == 1) {
            juego.update( {alquilada: false},{ where: { id: idJuego }}) //Actualización del juego para poder volverlo a alquilar
            .then(num => {
              if (num == 1) {
                


              } else {
                
            
                
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Ha surgido algún error al intentar crear el pedido."
              });
            });
        res.send({
          message: `El pedido con id ${id} ha sido eliminada correctamente.`
      });
    } else {
        res.send({
            message: `No se ha podido eliminar el pedido con id ${id}.`
        });
    }
})
.catch(err => {
    res.status(500).send({
        message: "Ha surgido algún error al intentar borrar el pedido con el id " + id
    });
});
}else{
res.send({
message: `No tienes permisos para borrar el pedido. Contacta con un administrador.`
});
};

module.exports = PedidoController;





