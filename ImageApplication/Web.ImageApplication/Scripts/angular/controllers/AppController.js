function AppController(
    $scope,
    imageService,
    appSettings,
    exifService) {

    $scope.search = null;
    $scope.showMap = false;
    $scope.showExif = false;
    $scope.uploadedFile = null;
    $scope.updateFlag = false;
    $scope.updateModel = {
        id: null,
        description: ""
    }
    $scope.images = [];
    $scope.init = function () {
        $scope.loadImages();
    }

    $scope.loadImages = function () {
        var request = imageService.GetAllImages().then(function (response) {
            $scope.dataLoaded(response.data);
        });
    }

    $scope.dataLoaded = function (data) {
        $scope.images = data;
        if ($scope.images.length) {
            imageService.GetImageById($scope.images[0].Id).then(function (response) {
                $scope.sendDescription($scope.images[0]);
                exifService.exif.getData(response.data, function () {
                    var coord = exifService.calculateGeoCoordinates(this);
                    exifService.setImageSrc(response.data);
                    $scope.showMap = !angular.isUndefined(coord.latit) || !angular.isUndefined(coord.lon)
                    if ($scope.showMap) {
                        setMarker(toDecimal(coord.latit), toDecimal(coord.lon));
                    }
                    $scope.uploadedFile = response.data;
                    $scope.showExif = angular.equals($scope.uploadedFile.exifdata, {});
                });
            });
        }
    }

    $scope.sendDescription = function (item) {
        $scope.updateModel.description = item.Description || "";
        $scope.updateModel.id = item.Id;
    }

    $scope.updateImageDescription = function () {
        var request = imageService.UpdateDescription($scope.updateModel);
        request.then(function (response) {
            $scope.updateFlag = true;
        });
    }

    $scope.init();
};
