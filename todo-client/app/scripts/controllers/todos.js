'use strict';

angular.module('todosApp')
  .controller('TodosCtrl', function ($scope, $timeout, TodoService) {

    $scope.todos = [];
    $scope.newTodo = '';

    $scope.getTodos = function() {
      TodoService.all().then(function(data) {
        $scope.todos = data;
      });
    };

    $scope.saveTodo = function() {
      TodoService.save($scope.newTodo).then(function(response) {
        $scope.todoSaved = true;
        console.log(response);
        $scope.newTodo = "";
        $scope.getTodos();
      });

    };

    $scope.deleteTodo = function(todo) {
      console.log('deleting todo ' + todo.title);
      $timeout(function() {
        TodoService.del(todo.id).then(function(response) {
          $scope.getTodos();
        });
      }, 1000);
    };

    $scope.getTodos();
  });
