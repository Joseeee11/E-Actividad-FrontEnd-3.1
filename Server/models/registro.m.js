const connection = require("../db/myslq");

class registroModel {
    //agregar un usuario
    agregar() {
        connection.query('INSERT INTO usuarios ')
    }
}