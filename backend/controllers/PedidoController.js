const { pedido } = require('../models/index');  
const { juego } = require('../models/index');
const { usuario }  = require('../models/index');

var juegoModel = require('../models').juego; //Traemos el modelo del juego, para mostrar los datos del mismo.

var usuarioModel = require('../models').usuario; //Traemos el modelo de usuario, para mostrar los datos de los usuarios.

const PedidoController = {};

//Recibimos el listado de todos los pedidos
PedidoController.getAll = (req, res) => {

if (req.user.usuario.rol == "administrador") {

pedido.findAll({include: [{ model:juegoModel}, {model:usuarioModel}]})
.then(data => {
    res.send(data);
})
.catch(err => {
    res.status(500).send({
 message:
 err.message || "Ha surgido algún error al intentar acceder a los pedidos."
});
});

}else{
    res.send({
    message:`No tienes permisos para ver todos los pedidos. Contacta con un administrador.`
    });
   }
  };

//Creación de nuevo pedido
//Comprobación que el videojuego y el usuario están en la misma ciudad. Si se verifica la condición anterior, 
//se hará la comprobación de si el videojuego está alquilado o no.

PedidoController.create = (req, res) => {

    if (req.user.usuario.rol == "administrador" || req.user.usuario.id == req.body.usuarioId) { //Eliminación únicamente adjudicada al administrador.

        //Comprobación si hay algo en el body.
        if(!req.body){
            res.status(400).send({
                message: "El contenido no puede estar vacío."
            });
            return;
        }

        //Comprobación de que el videojuego está en la misma ciudad que el usuario.

        //Buscamos la ciudad del videojuego 
        var ciudadUsuarioBuscado = "a";

        usuario.findByPk(req.body.usuarioId)
        .then(data => {
            if (data){
                ciudadUsuarioBuscado = data.ciudad;
                usuarioBuscado = data;
            }else{
                res.status(404).send({
                    message: `No se puede encontrar el videojuego con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:"Ha sugido algún error al intentar acceder al usuario con el id " + id
            });
        });

        //Buscamos la ciudad del usuario 
        var juegoBuscado = "q";
        var ciudadJuegoBuscado = "b";
        juego.findByPk(req.body.juegoId)
        .then(data => {

        //Comprobación de que las 2 ciudades son iguales y si el juego está ya alquilado.
        if (data) {
            juegoBuscado = data;
            ciudadJuegoBuscado = data.ciudad; 
        }
        if (ciudadJuegoBuscado == ciudadUsuarioBuscado && data.alquilado == false) {
            const nuevoPedido = {
                juegoId: req.body.juegoId,
                usuarioId: req.body.usuarioId,
                fecha_alquiler: req.body.fecha_alquiler,
                fecha_devolucion: req.body.fecha_devolucion
            };
            pedido.create(nuevoPedido)
            .then(data => {
                res.send(data);
                juegoBuscado.alquilado = true;
                console.log(juegoBuscado.alquilado);
                juego.update( {alquilado: true},{ where: { id: juegoBuscado.id}})
                .then(num => {
                    if (num == 1) {
                      // res.send({
                      //   message: ""
                      // });
                    } else {
                      // res.send({
                      //   message: ``
                      // });
                    }
                  })
                  .catch(err => {
                    res.status(500).send({
                      message: "Ha surgido algún error al intentar crear el pedido."
                    });
                  });
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Ha surgido algún error al intentar crear un pedido."
                });
              });
        } else {
          if (ciudadJuegoBuscado != ciudadUsuarioBuscado) {
            res.status(404).send({
              message: `El usuario y la película no se encuentran en la misma ciudad.`
            });
          }else{
            res.status(404).send({
              message: `La película ya está alquilada.`
            });
          }
          
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ha surgido algún error al intentar acceder al usuario con el id " + req.body.usuarioId
        });
      });
}else{
res.send({
message: `No tienes permisos para crear el pedido.`
});
}
};

//-------------------------------------------------------------------------------------

//Borramos un pedido
PedidoController.delete = (req, res) => {

if (req.user.usuario.rol == "administrador") {// Único permiso de eliminación al administrador

const id = req.params.id;

let idJuego = 0;

//Buscamos el pedido que queremos eliminar y sacamos la juego que está guardada en el pedido 
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
}
};

module.exports = PedidoController;





