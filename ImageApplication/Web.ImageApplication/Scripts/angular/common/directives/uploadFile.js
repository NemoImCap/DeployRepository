function uploadFile(imageService) {
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {
            elem.on("click", function (evt) {
                var formdata = $('#image');
                var foundForm = formdata.get(0);
                var files = foundForm[0].files;

                // Create FormData object  
                var fileData = new FormData();

                // Looping over all files and add it to FormData object  
                for (var i = 0; i < files.length; i++) {
                    fileData.append(files[i].name, files[i]);
                }
                if (files.length) {
                    imageService.UploadImage(fileData).then(function(response) {
                        console.log(response);
                    });
                } else {
                    console.log("no files");
                }
            });
        }
    }
}