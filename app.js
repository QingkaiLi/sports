"use strict";

angular.module('global', [])
  .run(function() {

  })
  .controller('mainCtrl', function($http) {
    $http({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'GET',
      url: 'http://127.0.0.1:3010/sports/nba'
    }).then(function(resp) {
      console.log(resp)
    })
  })
