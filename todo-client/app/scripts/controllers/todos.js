'use strict';

angular.module('todosApp')
  .controller('TodosCtrl', function ($scope, TodoService) {

    TodoService.all().then(function(data) {
        console.log(data);
    });
    
    $scope.todos = [];
    $scope.newTodo = '';

    $scope.saveTodo = function() {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = "";
    };

    $scope.deleteTodo = function(todo) {
      console.log('deleting ' + todo);
      $scope.todos.splice( $scope.todos.indexOf(todo), 1 );
    };

  });
