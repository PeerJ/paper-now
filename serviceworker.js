importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('activate', function(event) {
    console.log('activated');

    // clear everything from the cache
    /*event.waitUntil(
        caches.keys().then(function(keyList) {
          return Promise.all(keyList.map(function(key) {
              return caches.delete(key);
          }));
        })
    );*/

    var addToCache = function(cache, url) {
        console.log('caching ' + url);

        //caches.match(url).catch(function() {
            fetch(url).then(function(response) {
                cache.put(url, response);
            });
        //});
    };

    fetch('index.json').then(function(response) {
        response.json().then(function(data) {
            caches.open('require').then(function (cache) {
                data.require.forEach(function(item) {
                    addToCache(cache, item);
                });
            });

            caches.open('figures').then(function (cache) {
                data.figures.forEach(function(item) {
                    if (item.image) {
                        addToCache(cache, item.image);
                    }
                });
            });
        });
    });
});

self.addEventListener('fetch', function(event) {
    var fetchRequest = event.request;

    var returnFetchOrCached = function(response) {
        return response || fetch(fetchRequest);
    };

    var response = caches.match(event.request.url).then(returnFetchOrCached);

    event.respondWith(response);
});
