var Promise = require('bluebird');

var Secrets = require('../constants/Secrets');

var RecipeData = {
    get: function(searchTerm) {

    var xmlhttp = new XMLHttpRequest();
    var url = ('http://food2fork.com/api/search?key=' + Secrets.FoodKey + '&q=' + searchTerm);


    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if (xmlhttp.status == 200) {
               console.log("The result !!!");
               console.log(xmlhttp.responseText)[1];
               return xmlhttp.responseText;
           }
           else {
            //   do something here and reject the promise
           }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }
}

    
    // With ajax 
    // get: function(searchTerm) {
    //     console.log("In RecipeData get");
    //     console.log("Search Term is " + searchTerm);
    //     console.log('http://food2fork.com/api/search?key=' + Secrets.FoodKey + '&q=' + searchTerm);
    //     return new Promise(function (resolve, reject) {
    //         $.ajax({
    //             url: ('http://food2fork.com/api/search?key=' + Secrets.FoodKey + '&q=' + searchTerm),
    //             dataType: 'json',
    //             cache: false,
    //             success: function(data) {
    //                 resolve(data);
    //                 console.log("Successful retrieved the recipes");
    //             },
    //             error: function(err) {
    //                 console.log("The error was ");
    //                 console.log(err);
    //                 // todo: Add some logging and error states
    //                 var result = new Error();
    //                 reject(result);
    //             },
    //         })
    //     })
    // }

module.exports = RecipeData;