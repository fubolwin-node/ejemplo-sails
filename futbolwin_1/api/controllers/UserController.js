/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
			 'new': function (req, res) {
              	
              	res.view();
            
            },
        index: function (req, res) {
            
              User.find(function foundUser (err, users) {
                if(err) return res.redirect('/user/new');
                res.view({
                  users: users
                });
              });
            
            },
        create: function(req, res) {
            
                User.create(
                                req.params.all()
                                , function userCreated(err, user) {
                                     
                                            if (err) return res.redirect('/user/new');
                                           
                                            res.redirect('/user/show/' + user.id); 
                                      
                                      }
                          );
            
              },
        show: function(req, res){

                  funtion_show( req, res);
                    // res.view({
                    
                    //     sku: val.id
                    
                    // });
                   // return res.redirect('/user/new'req.params.id);
              }
};


function funtion_show (req, res) 
{
                  var val   = req.params.all();

              User.findOne(
                                {
                                    id:val.id
                                }).exec(function( err, userFinded){
                                      
                                      
                                                      if(err){
                                                          console.log("Error vida HP!!! '"+err+"'");
                                                          return res.serverError(err);
                                                         
                                                      }

                                                      

                                                      console.log("Encontró al peluche el usuario '"+userFinded+"'")
                                                      


                                                      res.view({
                                                      
                                                        a_data: userFinded
                                                      
                                                      })
                                      })
}


