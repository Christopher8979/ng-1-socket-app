;(function(ng) {
  "use strict";

  ng.module("ng-fullstack-app")
    .config([
      "$locationProvider",
      function($locationProvider) {
        
        $locationProvider
          .html5Mode(true)
          .hashPrefix('*');
        
      }
    ]);
}(window.angular));
