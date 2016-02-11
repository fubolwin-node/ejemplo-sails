
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
            }

};