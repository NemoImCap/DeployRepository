function imageService(appSettings, api, spinnerService) {
    var self = {};

    self.UploadImage = function(file) {
        var promise = spinnerService.during(api.post(appSettings.PostFile + 'sdfs', file));
        return promise;
    }
    return self;
}