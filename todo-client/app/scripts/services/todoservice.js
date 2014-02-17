'use strict';

angular.module('todosApp')
  .factory('TodoService', function ($http) {
    
    var apiUrl = 'http://localhost:1337/todo/'

    // this pattern gives us similar behaviour to 
    // $resource, without the fussiness.

    var TodoService = function(data) {
      // extend is equivalent to underscore's extend
      // and shallow copies the following methods into 
      // the TodoService object.
      angular.extend(this, data);
    };

    TodoService.all = function() {
      return $http.get(apiUrl).then(function(response) {
        return new TodoService(response.data);
      });
    };
    
    TodoService.save = function(data) {
      return $http.post(apiUrl, data).then(function(response) {
        return new TodoService(response.data);
      });
    };

    TodoService.del = function(id) {
      return $http.delete(apiUrl + id).then(function(response) {
        return new TodoService(response.data);
      });
    };

    return TodoService;
  });
