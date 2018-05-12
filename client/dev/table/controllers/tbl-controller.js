; (function (ng) {
  "use strict";

  ng.module("ng-fullstack-app")
    .controller("TableController", [
      "$scope",
      "$log",
      "Todo",
      "TodoDAO",
      function (scope, $log, Todo, TodoDAO) {

        scope.items = [];

        socket.emit("fetch-items", {userDetails: "me"});

        socket.on("sending-items", function (data) {
          scope.items = data;
          scope.$apply();
        });

        scope.addItem = function () {
          socket.emit('create-entry', scope.newItem);
        }
        
        socket.on('entry-created', function (e) {
          scope.items.push(e);
          scope.$apply();
          
          scope.newItem = {};          
        });

        scope.deleteItem = function (index) {
          socket.emit('delete-item', index);
        }

        socket.on('entry-deleted', function (updatedlist) {
          console.log(updatedlist);
          scope.items = updatedlist;
          scope.$apply();
        });
      }
    ]);
}(window.angular));
