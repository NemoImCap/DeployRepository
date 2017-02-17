var app = angular.module("app", ['core']);


//Controllers
app.controller('AppController', AppController);


AppController.$inject = ['$scope', 'imageService', 'appSettings', 'exifService'];


/* Core Module Config
-----------------------------------------------------------------------------------------------------------------*/



