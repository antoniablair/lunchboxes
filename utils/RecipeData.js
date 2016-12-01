var Promise = require('bluebird');
var Secrets = require('../constants/Secrets');

var RecipeData = {
    get: function(searchTerm) {
        return new Promise(function (resolve, reject) {

            var xmlhttp = new XMLHttpRequest();
            var url = ('http://www.recipepuppy.com/api/?q=' + searchTerm);


            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                   if (xmlhttp.status == 200) {
                       var data = JSON.parse(xmlhttp.responseText);
                       resolve(data['results']);
                   }
                   else {
                    //   todo: better error handling
                       var result = new Error();
                       reject(result);
                   }
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            }
        )}
}

module.exports = RecipeData;
