var Promise = require('bluebird');

var RecipeData = {
     get: function(searchTerm) {
         return new Promise(function (resolve, reject) {
             var url = ('http://www.recipepuppy.com/api/?q=' + searchTerm);

             $.ajax({
                 url: url,
                 type : 'GET',
                 dataType: 'jsonp',
                 crossDomain: 'true',
                 jsonpCallback: 'callback',
                 success: function(data) {
                     resolve(data['results']);
                 },
                 error: function(err) {
                   var result = new Error();
                   reject(result);
                 },
             })
         })
     }
}

module.exports = RecipeData;

