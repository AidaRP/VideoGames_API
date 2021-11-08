module.exports = {
    secret: process.env.AUTH_SECRET || "$sbTbAmRtu89", //Clave usada para encriptar
    expires: process.env.AUTH_EXPIRES || "24h",      //Duracion del token
    rounds: process.env.AUTH_ROUNDS || 10            //Numero de encriptaciones de contraseña
}