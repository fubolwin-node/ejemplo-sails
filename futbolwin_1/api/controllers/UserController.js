/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

            _config: {
              actions: false,
              shortcuts: false,
              rest: false
            },

            index: function (req, res) {
              User.find(function foundUser (err, users) {
                if(err) {
                  return res.redirect('/user/new');
                }
                res.view({
                  users: users
                });
              });
            
            },

            findAll: function (req, res) {
              User.find(function foundUser (err, users) {
                console.log("Encontró y respondió '" + users.length + "' Usuarios")
                if(err) {
                  return res.send({});
                }
                res.json(users);
              });
            
            },

            create: function(req, res) {
              User.create(req.params.all(), function userCreated(err, user) {
                console.log("Procede a crear el usuario user:"+user)
                if (err) {
                  console.log(" Error al guardar el usuario: "+err)
                  return res.redirect('/user/new');
                } 
                console.log(" Guardó al peluche el usuario: "+user.email)
                res.redirect('/user/show/' + user.id); 
              });
            },

};

