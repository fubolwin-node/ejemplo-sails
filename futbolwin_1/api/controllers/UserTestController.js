
module.exports = {
			
			     'new': function (request, response) {
              	response.view();
            },
            
            index: function (request, response) {
              UserTest.find(function foundUser (err, users) {
                if(err) {
                  console.log('error vida HP!! ('+err+'')
                	return response.redirect('/usertest/new');
                }
                response.view({
                  users: users
                });
              });
            },

            create: function(request, response) {
                UserTest.create(request.params.all(), function userCreated(err, userTest) {
                  if (err) {
                    console.log('error vida HP!! ('+err+'')
                  	return response.redirect('/usertest/new');
                  }
                  response.redirect('/usertest/show/' + userTest.id); 
                });
            },

            show: function(request, response) {
              console.log("listo a buscar el usuario de id='"+request.params.id+"' y name='"+request.params.name+"'")
              UserTest.findOne({id:request.params.id}).exec(function(err, userFinded){
                if(err){
                  console.log("Error vida HP!!! '"+err+"'")
                  response.redirect('responses/notFound')
                }
                console.log("Encontró al peluche el usuario '"+userFinded+"'")
                response.view({
                  userTest: userFinded
                })
              })
            }

};