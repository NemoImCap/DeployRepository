var core = angular.module("core", [ "ngHelperBusy", 'ui.bootstrap'])
    .constant('keyCodes', {
        esc: 27,
        space: 32,
        enter: 13,
        tab: 9,
        backspace: 8,
        shift: 16,
        ctrl: 17,
        alt: 18,
        capslock: 20,
        numlock: 144
    }).constant('templates', {
        Domain: '',
    })
    .constant("appSettings", {
        "serviceUrl": function (currentUrl) {
            var url = currentUrl.indexOf("localhost") > -1 ? "http://localhost:19532/" : window.location.origin;
            return url;
        },

        "PostFile": "/Home/UploadFile?description="
    });

//Services

core.service('api', Api);
core.service('spinnerService', spinnerService);
core.service('imageService', imageService)

spinnerService.$inject = ['$timeout', '$busy'];
imageService.$inject = ['appSettings', 'api', 'spinnerService'];
Api.$inject = ['$http', '$q', 'appSettings', '$window'];

//Derectives

core.directive('uploadFile', uploadFile);
core.directive('getFileExif', getFileExif);

uploadFile.$inject = ['imageService'];