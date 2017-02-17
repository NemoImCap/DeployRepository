function AppController(
    $scope,
    $http,
    imageService,
    appSettings) {

    $scope.search = null;
    $scope.showMap = false;
    $scope.showExif = false;
    $scope.uploadedFile = null;
    $scope.updateFlag = false;
    $scope.updateModel = {
        id: null,
        description : ""
    }
    $scope.images = [];
    $scope.init = function() {
        $scope.loadImages();
    }

    $scope.loadImages = function() {
        var request = imageService.GetAllImages().then(function (response) {
            $scope.images = response.data;
            $scope.dataLoaded(response.data);
        });
    }

    $scope.dataLoaded = function(response) {
        if (response.length) {
            $http({
                url: appSettings.serviceUrl(window.location.href) + appSettings.GetImageById + $scope.images[0].Id,
                method: "GET",
                responseType: "blob"

            }).then(function (response) {
                EXIF.getData(response.data, function () {
                    var output = document.getElementById('blah');
                    output.src = URL.createObjectURL(response.data);;
                    var long = EXIF.getTag(this, 'GPSLongitude');
                    var latit = EXIF.getTag(this, 'GPSLatitude');
                    if (!angular.isUndefined(long) && !angular.isUndefined(latit)) {
                        setMarker(toDecimal(latit), toDecimal(long));
                        $scope.showMap = true;
                    } else {
                        $scope.showMap = false;
                    }
                    $scope.uploadedFile = this;
                    output.className = '';
                    $scope.showExif = angular.equals($scope.uploadedFile.exifdata, {});
                });
            });
        }
    }

    $scope.sendDescription = function(item) {
        $scope.updateModel.description = item.Description || "";
        $scope.updateModel.id = item.Id;
    }

    $scope.updateImageDescription = function() {
        var request = imageService.UpdateDescription($scope.updateModel);
        request.then(function(response) {
            $scope.updateFlag = true;
        });
    }

    $scope.init();
};
