var Promise = require('bluebird');

var RecipeDataJquery = {
     get: function(searchTerm) {
         return new Promise(function (resolve, reject) {
             $.ajax({
                 url: ('http://www.recipepuppy.com/api/?q=' + searchTerm),
                 dataType: 'json',
                 cache: true,
                 success: function(data) {
                     resolve(data['results']);
                 },
                 error: function(err) {
                   console.log('the error is ' + err);
                   var result = new Error();
                   reject(result);
                 },
             })
         })
     }
}

module.exports = RecipeDataJquery;

