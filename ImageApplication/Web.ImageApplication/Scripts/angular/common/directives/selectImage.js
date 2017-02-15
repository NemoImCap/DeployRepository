function selectImage($http, appSettings) {
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {
            elem.on("click", function(evt) {
                if (attr.id != null) {
                    $http({
                        url: appSettings.serviceUrl(window.location.href) + appSettings.GetImageById + +attr.id,
                        method: "GET",
                        responseType: "blob"

                    }).then(function (response) {
                        EXIF.getData(response.data, function() {
                            var output = document.getElementById('blah');
                            output.src = URL.createObjectURL(response.data);;
                            var long = EXIF.getTag(this, 'GPSLongitude');
                            var latit = EXIF.getTag(this, 'GPSLatitude');
                            if (!angular.isUndefined(long) && !angular.isUndefined(latit)) {
                                initMap(toDecimal(latit), toDecimal(long));
                                google.maps.event.addDomListener(window, 'load', initMap);
                                scope.$parent.showMap = true;
                            } else {
                                scope.$parent.showMap = false;
                            }
                            scope.$parent.uploadedFile = this;
                            output.className = '';
                            scope.$parent.showExif = angular.equals(scope.uploadedFile.exifdata, {});
                            scope.$apply();
                        });
                    });
                }
            });
        }
    }
}