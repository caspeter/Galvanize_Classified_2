(function() {
    'use strict';

    angular
      .module('app')
      .component("messageComponent", {
        controller: MessageController,
        templateUrl: '/js/app/messages/messages.template.html'
    });

    MessageController.$inject=['$http']

    function MessageController($http) {
        const vm = this;

        vm.$onInit = onInit;
        vm.getMessages = getMessages;
        vm.onNewSubmit = onNewSubmit;
        vm.postNewClassified = postNewClassified;

        function onInit() {
          vm.messages = [];
            vm.getMessages();
        }//end onInit

        function onNewSubmit(data) {
          console.log(data);
          vm.postNewClassified(data);
        }//end onNewSubmit


        function getMessages() {
            $http.get('/classifieds').then((response) => {
                vm.messages = response.data;
                console.log(response.data);
            });
        }//end getMessage

        function postNewClassified(data) {
          $http.post('/classifieds', data).then((response)=>{
            vm.messages.push(response.data)
          });
        }// end postNewClassified


    }//end controller

}());
