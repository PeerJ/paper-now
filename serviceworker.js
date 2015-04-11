importScripts('serviceworker-cache-polyfill.js');

// TODO: cache figures and other external resources on install

self.onfetch = function(event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        if (response) {
            return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(function (response) {
            caches.open('responses').then(function (cache) {
                cache.put(fetchRequest, response.clone());
            });

            return response;
        });
    }));
};
