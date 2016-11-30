var Promise = require('bluebird');
var Secrets = require('../constants/Secrets');

var RecipeData = {
    get: function(searchTerm) {
        return new Promise(function (resolve, reject) {

            var xmlhttp = new XMLHttpRequest();
            var url = ('http://food2fork.com/api/search?key=' + Secrets.FoodKey + '&q=' + searchTerm);


            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                   if (xmlhttp.status == 200) {
                       var data = JSON.parse(xmlhttp.responseText);
                       resolve(data);
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
