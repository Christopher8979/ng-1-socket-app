;(function(ng) {
  "use strict";

  ng.module("ng-fullstack-app")
    .config([
      "$routeProvider",
      function($routeProvider) {
        $routeProvider
          .when("/todo", {
            templateUrl: "todo/templates/todo.html",
            controller: "TodoController",
            controllerAs: "todoCtrl"
          })
          .when("/", {
            templateUrl: "table/templates/table.html",
            controller: "TableController"
          })
          .otherwise({
            redirectTo: "/"
          });
      }
    ]);
}(window.angular));
