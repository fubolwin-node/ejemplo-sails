/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

// module.exports = {
//   connection: 'mysql',
//  attributes: {

//            id: {
//             type: 'integer',
//             autoIncrement: true,
//             primaryKey: true
//             },
//             username: {
//                 type: 'string'
//             },
//             email: {
//                 type: 'string'
//             },
//             password: {
//                 type: 'string'
//             },

//             // Este método es para evitar pasar toda la información del modelo
//             // Evitamos pasar los siguientes parámetros: password, confirmation, encryptedpassword y _csrf. 
//             toJSON: function() { 
//               var obj = this.toObject();
//               delete obj.password;
//               delete obj.confirmation;
//               delete obj.encryptedPassword;
//               delete obj._csrf;
//               return obj;
//             }
//           }
//      };

module.exports = {
 
    connection: 'mysql',
    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: 'string'
        },
        lastname: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        toJSON: function() {

                var obj = this.toObject();
                delete obj.password;
                return obj;
            
            }

    }
};

     

