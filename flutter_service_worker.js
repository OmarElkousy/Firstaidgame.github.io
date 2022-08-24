'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e2b5f754095d248260fa96ff74ee16e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2a6a60b6bf483ab77f553784eb084014",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06e8784f8ee20c24331b4d202e23c1e4",
".git/logs/refs/heads/master": "852d78078e7a12580cc669278b180d9b",
".git/logs/refs/remotes/origin/master": "a8b75faa56f754b03ddad3a11d4677ca",
".git/objects/00/c75799839b7b6327aa6fc0339e10627778391c": "7a52f16add53e528e19b3f356cee0d73",
".git/objects/00/ff43b259a7a2f70ffee294240dca67d6a42a7b": "a3d4e6d97919b8aafde6a7e3a559def0",
".git/objects/02/5dbf63fb60290c2ece0482059337c50a8c2993": "9f60782d41a92f59ad598a5873da27e6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/aae67318df12538917c70e0375914156e13338": "b158eead36ac6aeaa5aab941cbc11d20",
".git/objects/11/051b50bab2dd2ffbb7e3647ed8e61e5690fac9": "9b4b5567c25644f1a7ec91f85ad39874",
".git/objects/14/b1a93f307ca2104b27195ab3d46229f3c8542f": "bad20fcf392460df6db4fc6b3e4b1229",
".git/objects/1f/cf305e0459e6dc3c6248f1aa35c5779b33fd6f": "a86ec79c326d80352323eec0edacf3c9",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/48/98e297a96884b5b3c438e9210c3bbb5010f245": "cbc876a7baad681a504f13f255f1ade8",
".git/objects/48/9ac0266b36db3b0d2ac28bf21bdf8add121912": "acc4edcdbfcd7f19763ff285e3cac4d5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/69/3b8c8659e59e3e03e0c53ff3bc05ee97b3eda2": "798995f112a1dc7842ac244b9b7328f3",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/c44b455c4117d86cd9163ed4aefc8973545b08": "b30d94d47871290a871c91178797934c",
".git/objects/6b/0b3f5094644210440c6822b73920be2459287d": "6a4d64ab2bf2b579447d29f8a155a9a4",
".git/objects/6d/75f96ab638ed628bd4023c8e67dff5eedee9a1": "ea01e3799becd526962de1c84181da86",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/9f971e167e9d4f962c4253e0e2235b27063446": "1d2455ac541d1e3075be37a94d8f1771",
".git/objects/88/1c3220687034150d8b848209d2f5121fe581cb": "a0aaaf134b06f241a336593a450e15c6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/9fffd477fc5ed86e8fa7c4a9aa91b454fd3c96": "130c68fe493700ab7a74ee8732e33d45",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/752aa127afbaa059c98e207f135fa71140acbe": "d41c60a9e4583187623b94a147655058",
".git/objects/a8/2d059b3de9c6cc908d8affac2b1ab15c9e3038": "f95cebfd15495679d68cba5f207714d0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/6b1a18d639ec285548c961ca0b9a084f25f1b9": "b6884399f919f8a489961b623071ce80",
".git/objects/cd/973842ca11dceb958e761afa67ff077a7a29fd": "a6d054dff3dbc53998dee33ea1383629",
".git/objects/ce/0285fb1b602253dc205bb0a4e04c54b8d02b8b": "66c340880fe83858c7a8405121a9dd0d",
".git/objects/d0/47609d3ce332ee88b48880a5ae29269043cb69": "45de8faa4f21618b40fef61b7069da83",
".git/objects/d0/db5af6bac342d9eb00205435d8b8997ebee815": "6e4da0876e75953f4d6ee0d5c7830bc4",
".git/objects/d5/c5e9f8b250890d1ced990b1f681a3cc1e9a9f2": "108be2f54c21b3482b6753d10357b4bd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c602ded63a037b8e28848585806888719d91ce": "78f3a54f5b4d331e97bc9c7b7acee7c2",
".git/objects/dd/b3a70060e29ade3b3565eaed62042f92c55b7f": "e8c0a0da4469a2660fed9b9888cdc25c",
".git/objects/dd/d9a1f9e5b4279c41ae1e72de160381da045048": "906c63f738ab9053cb12dfac78bebafe",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/55e57d0029cc7aac88f4d2103e9a3051fdfda3": "ec13fceb202cbd4375e664d8071a9e98",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/3710a8e855970c191f82eccbdacc5c0a1f3e44": "270699a669a4a80db75a81b2465c2c2f",
".git/objects/fc/cf4bd50af06ec3add30d5e5eb369af1b190e28": "d134de95945ccb927c4422b9933ca290",
".git/refs/heads/master": "c7b02c06b9438a77ac21a120376d42bc",
".git/refs/remotes/origin/master": "c7b02c06b9438a77ac21a120376d42bc",
"assets/AssetManifest.json": "7822bbad6e589e10bb204200978632ad",
"assets/assets/Correct_Sound.m4a": "77ed8a59e2cb49b4dc971a21e8f6f67a",
"assets/assets/images/level_1.jpg": "7a4eefd4ed4ef83e3dad16ad30810e82",
"assets/assets/images/level_2.jpg": "c09346d3a4bec782439435de1e5102b9",
"assets/assets/images/person.png": "c71a3fe70f78cfbe0f9d70ece65b896f",
"assets/assets/images/smoky.gif": "ddf6dc901b911f1206a6334a89e013b4",
"assets/assets/theme_01.mp3": "c07f40b2a6291a22ee7347df9e137128",
"assets/assets/Woosh.wav": "e1170564eb9917d4c35f67d3119374b2",
"assets/assets/Wrong.mp3": "e3c33bdbe9314918d177c0b521cdf394",
"assets/assets%255Cfonts%255CBlaka-Regular.ttf": "1862599d526d3ba606caa80ca1022555",
"assets/assets%255Cfonts%255CElMessiri-Bold.ttf": "286ef705c6bd954162a3f7cc3de64f1d",
"assets/assets%255Cfonts%255CElMessiri-Regular.ttf": "ecd6ec55d5899a286bbd93ed148992b4",
"assets/assets%255Cfonts%255CElMessiri-SemiBold.ttf": "b0d8c4bd377d00c6113eb1532d28579a",
"assets/FontManifest.json": "e679e6a4aeb7d7b04e27579bd5222771",
"assets/fonts/Blaka-Regular.ttf": "1862599d526d3ba606caa80ca1022555",
"assets/fonts/ElMessiri-Bold.ttf": "286ef705c6bd954162a3f7cc3de64f1d",
"assets/fonts/ElMessiri-Medium.ttf": "3b70155662023f0f4e6ffd53e3277e55",
"assets/fonts/ElMessiri-Regular.ttf": "ecd6ec55d5899a286bbd93ed148992b4",
"assets/fonts/ElMessiri-SemiBold.ttf": "b0d8c4bd377d00c6113eb1532d28579a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d545567a254a7e4ab487d81fecff1fff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"dat.gui.min.js": "b87024acb876bb767a7c27a5747d015d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8cb56ae137ab13938990dad6a2ebba45",
"/": "8cb56ae137ab13938990dad6a2ebba45",
"main.dart.js": "e478b77cd0201f18b8b82d9dc3124f94",
"manifest.json": "71e0154c18320c9ca4cbf26c3e30935d",
"script.js": "e1db0b316b5927ea71cbce847de154f4",
"version.json": "322dfa94430cc69aa45ce83495f46466"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
