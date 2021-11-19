const { usuario } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarioConfig = require('../config/auth');

const UsuarioController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//Login usuario with database
//get usuario
AuthController.signIn = (req, res) =>{
        let { correo, clave } = req.body;
        // Buscar usuario
        usuario.findOne({ where: { correo: correo }
        }).then(usuario => {
            if (!usuario) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {
                if (bcrypt.compareSync(clave, usuario.clave)) {
                    // Creamos el token
                    let token = jwt.sign({ usuario: usuario }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        usuario: usuario,
                        token: token
                    })
                } else {
                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    };


//-------------------------------------------------------------------------------------
//REGISTER new usuario in database
//create usuario
AuthController.signUp = (req, res)=> {

        // Encriptamos la contraseña
        let clave = bcrypt.hashSync(req.body.clave, Number.parseInt(authConfig.rounds));

        // Crear un usuario
        usuario.create({
            name: req.body.name,
            correo: req.body.correo,
            clave: clave
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

    };

module.exports = AuthController;

