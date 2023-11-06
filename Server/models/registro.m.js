const connection = require("../db/myslq");

class registroModel {
    //agregar un usuario
    agregar(datos) {
        connection.query('INSERT INTO usuarios set ?', [datos], function (error, results, fields) {
            if (error) reject (error);
            resolve("Se agrego correctamente");
        })
    }
}