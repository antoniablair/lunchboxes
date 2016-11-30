var Promise = require('bluebird');
var Secrets = require('../constants/Secrets');

var RecipeDataJquery = {
     get: function(searchTerm) {
         return new Promise(function (resolve, reject) {
             $.ajax({
                 url: ('http://food2fork.com/api/search?key=' + Secrets.FoodKey + '&q=' + searchTerm),
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

