(function() {
    'use strict';

    angular
      .module('app')
      .component("individualMessageComponent", {
        bindings: {
          message: '<',
        },
        controller: IndividualMessageController,
        templateUrl: '/js/app/messages/editMessage.template.html'
    });

    IndividualMessageController.$inject=['$http']

    function IndividualMessageController($http) {
        const vm = this;

        vm.$onInit = onInit;
        vm.getMessages = getMessages;
        vm.patchClassified = patchClassified;
        vm.deleteClassified = deleteClassified;


        function onInit() {
          vm.editableData = {
            id: vm.message.id,
            title: vm.message.title,
            description: vm.message.description,
            price: vm.message.price,
            item_image: vm.message.item_image
          }
        }//end onInit


        function getMessages() {
            $http.get('/classifieds').then((response) => {
                vm.messages = response.data;
                console.log(response.data);
            });
        }//end getMessage

        function patchClassified(input) {
          console.log(input);
          $http.patch(`/classifieds/${input.id}`, input).then((response)=>{
            
          })
        }

        function deleteClassified(id) {
          console.log(id);
          $http.delete(`/classifieds/${id}`).then((response)=>{
            vm.getMessages();
          })
        }//end deleteClassified

    }//end controller

}());
