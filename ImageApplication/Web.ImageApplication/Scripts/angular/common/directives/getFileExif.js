function getFileExif() {
     return {
        restrict: 'A',
        link: function(scope, elem, attr) {
             elem.on("change", function(evt) {
                 EXIF.getData(evt.target.files[0], function() {
                     scope.uploadedFile = this;
                     var output = document.getElementById('blah');
                     output.src = URL.createObjectURL(evt.target.files[0]);
                     output.className = '';
                 });
             });
         }
     }
}