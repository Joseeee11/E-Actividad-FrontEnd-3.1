const connection = require("../db/myslq");

class loginModel{
    verificaUser(parametro){
        console.log(parametro);
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM `usuarios` WHERE `usuario` = ?' , parametro , function (error, results, fields) {
                if (error){
                   return reject ("Error al buscar el usuario en la base de datos")
                }  
                if (results[1]) {
                    return reject ("Mas de un usuario encontrado")
                }
                console.log(results)
                resolve (results[0]);
            })
        })
    }
}


module.exports= new loginModel();