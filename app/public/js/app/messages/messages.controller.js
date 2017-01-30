(function() {
  'use strict';

  angular
        .module('app')
        .component("messageComponent", {
            controller: MessageController,
            templateUrl: '/js/app/messages/messages.template.html'
        });

}());
