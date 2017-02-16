function getFileExif() {
     return {
        restrict: 'A',
        link: function(scope, elem, attr) {
             elem.on("change", function(evt) {
                 EXIF.getData(evt.target.files[0], function () {
                     var long = EXIF.getTag(this, 'GPSLongitude');
                     var latit = EXIF.getTag(this, 'GPSLatitude');
                     if (!angular.isUndefined(long) && !angular.isUndefined(latit)) {
                         initMap(toDecimal(latit), toDecimal(long));
                         google.maps.event.addDomListener(window, 'load', initMap);
                         scope.showMap = true;
                     } else {
                         scope.showMap = false;
                     }
                     scope.uploadedFile = this;
                     var output = document.getElementById('blah');
                     output.src = URL.createObjectURL(evt.target.files[0]);
                     output.className = '';
                     scope.showExif = angular.equals(scope.uploadedFile.exifdata, {});
                     scope.updateModel.description = "";
                     scope.updateModel.id = null;
                     scope.$apply();
                 });
             });
         }
     }
}