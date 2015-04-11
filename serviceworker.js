importScripts('serviceworker-cache-polyfill.js');

// TODO: cache figures and other external resources on install

self.onfetch = function(event) {
    var fetchRequest = event.request.clone();

    event.respondWith(fetch(fetchRequest).then(function (response) {
        caches.open('responses').then(function (cache) {
            cache.put(fetchRequest, response.clone());
        });

        return response;
    }, function () {
        return caches.match(event.request).then(function (response) {
            return response;
        });
    }));
};
