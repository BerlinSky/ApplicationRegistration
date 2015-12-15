(function(module) {
    "use strict";

    module.factory("applicationResource",
                ["$resource",
                 applicationResource]);

    function applicationResource($resource) {
        return $resource("/api/applicationList/:appId");
    }

}(angular.module("ut.dataService")));