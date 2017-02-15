function loadImage($http, appSettings) {
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {
            if (attr.id != null) {
                $http({
                    url: appSettings.serviceUrl(window.location.href) + appSettings.GetImageById + +attr.id,
                    method: "GET",
                    responseType: "blob"

                }).then(function(response) {
                    EXIF.getData(response.data, function() {
                        var output = document.getElementById(attr.id);
                        output.src = URL.createObjectURL(response.data);
                    });
                });
            }
        }
    }
}