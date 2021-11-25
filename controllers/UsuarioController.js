const { usuario } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UsuarioController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//Login usuario with database
//get usuario
UsuarioController.signIn = (req, res) =>{
        let correo = req.body.correo;
        let clave  = req.body.clave;
        // Buscar usuario
        usuario.findOne({ where: { correo: correo }
        }).then(usuario => {
            if (!usuario) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {
              res.json({
                usuario: usuario,
                token: token
            })
                // if (bcrypt.compareSync(clave, usuario.clave)) {
                //     // Creamos el token
                //     let token = jwt.sign({ usuario: usuario }, authConfig.secret, {
                //         expiresIn: authConfig.expires
                //     });

                   
                // } else {
                //     // Unauthorized Access
                //     res.status(401).json({ msg: "Contraseña incorrecta" })
                // }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    };


//-------------------------------------------------------------------------------------
//REGISTER new usuario in database
//create usuario
UsuarioController.signUp = (req, res)=> {
if (req.user.usuario.rol == "administrador") {
        // Encriptamos la contraseña
        let clave = bcrypt.hashSync(req.body.clave, Number.parseInt(authConfig.rounds));
if (clave.lenght >= 8){
        // Crear un usuario
        usuario.create({
            nombre: req.body.nombre,
            correo: req.body.correo,
            
        }).then(usuario => {

            // Creamos el token
            let token = jwt.sign({ usuario: usuario }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                usuario: usuario,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });
    } else{
        res.send({ 
            message: `La contraseña tiene que tener un mínimo de 8 caracteres.${clave}`
        });
        };
    }else{
        res.send({
            message:`Careces de permiso para el registro de usuarios, ponte en contacto con un administrador. Gracias.`
        })
    };
};

//LISTADO DE TODOS LOS USUARIOS

UsuarioController.getAll = (req,res) => {
    if (req.user.usuario.rol == "administrador") {

        usuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error detectado al intentar acceder a los usuarios."
            });
        });
    }else{
        res.send({
            message: `No tienes permisos para visualizar a todos los usuarios. Contacto con un administrador`
        });
    }
};


//Busqueda de usuario por Id
UsuarioController.getById = (req, res) => {
    const id = req.params.id;

    usuario.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find usuario with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving categories with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------

UsuarioController.update = (req, res) => {

      const id = req.params.id;

      if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {// HACEMOS QUE SOLO PUEDA ACTULIZARLO EL ADMINISTRADOR O EL USUARIO DUEÑO DEL PERFIL

            
          
            usuario.update(req.body, {
              where: { id: id }
            })
              .then(num => {
                if (num == 1) {
                  res.send({
                    message: "El usuario ha sido actualizado correctamente."
                  });
                } else {
                  res.send({
                    message: `No se ha podido actualizar el usuario con el id ${id}`
                  });
                }
              })
              .catch(err => {
                res.status(500).send({
                  message: "Ha surgido algún error al intentar actualizar el usuario con el id " + id + "."
                });
              });
      }else{
        res.send({
          message: `No tienes permisos para modificar el perfil indicado.`
        });
      }
};

//borrar todos los usuarios por id
UsuarioController.delete = (req, res) => {
  const id = req.params.id;

  usuario.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "usuario was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete usuario with id=${id}. Maybe Movie was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete usuario with id=" + id
      });
    });
};
//borrar todos los usuarios
UsuarioController.deleteAll = (req, res) => {
  usuarios.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} categories were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all categories."
      });
    });
};

module.exports = UsuarioController;