var Promise = require('bluebird');

var RecipeDataJquery = {
     get: function(searchTerm) {
         return new Promise(function (resolve, reject) {
             $.ajax({
                 url: ('http://www.recipepuppy.com/api/?q=' + searchTerm),
                 dataType: 'json',
                 cache: false,
                 success: function(data) {
                   resolve(data);
                 },
                 error: function(err) {
                   var result = new Error();
                   reject(result);
                 },
             })
         })
     }
}

module.exports = RecipeDataJquery;

