'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "eef088adb5dad035866534ffe27fde4c",
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
".git/index": "abc2ba216433419e3e212c7a51a60533",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5b94001e7a6058281f825ec472a3ae0",
".git/logs/refs/heads/master": "6351aafd3be70eded6d1785139613649",
".git/logs/refs/remotes/origin/master": "b475357e472b6ab4eac301ca5b88e55d",
".git/objects/00/c75799839b7b6327aa6fc0339e10627778391c": "7a52f16add53e528e19b3f356cee0d73",
".git/objects/00/ff43b259a7a2f70ffee294240dca67d6a42a7b": "a3d4e6d97919b8aafde6a7e3a559def0",
".git/objects/02/5dbf63fb60290c2ece0482059337c50a8c2993": "9f60782d41a92f59ad598a5873da27e6",
".git/objects/08/f1462aa607c875205b309131ad5290851d397c": "a93d468133e3b7731937a5b7cfe3df96",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/aae67318df12538917c70e0375914156e13338": "b158eead36ac6aeaa5aab941cbc11d20",
".git/objects/11/051b50bab2dd2ffbb7e3647ed8e61e5690fac9": "9b4b5567c25644f1a7ec91f85ad39874",
".git/objects/14/b1a93f307ca2104b27195ab3d46229f3c8542f": "bad20fcf392460df6db4fc6b3e4b1229",
".git/objects/1b/a235d2879120ca15ec0cd298dc47d8c111ceb1": "74cc316715194da12cde1d26b768a1b4",
".git/objects/1f/cf305e0459e6dc3c6248f1aa35c5779b33fd6f": "a86ec79c326d80352323eec0edacf3c9",
".git/objects/24/32ac3aba0cf0577827568ba222072eaed67a3d": "51b94ef7b355511783e062cac994e541",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/697a085e2520202b8163e2dc44e2c209575f0e": "cbbfce44381d1802ff6e65bce78fd1ef",
".git/objects/2a/7a01b7648027d565c66a94170f82d2ed3e82c2": "6bac696229440dd3166a2041c5a6a4c0",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3e/bde8af88d3a073ad311b73d168d9fb8e660573": "ef528ef01b2c81a2cbc879f33cc520bb",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/48/81808580fa7f2678dacfb5a3bfeaaadcb11a4f": "8c81756a73a92afea3d39ebf25f78b8f",
".git/objects/48/98e297a96884b5b3c438e9210c3bbb5010f245": "cbc876a7baad681a504f13f255f1ade8",
".git/objects/48/9ac0266b36db3b0d2ac28bf21bdf8add121912": "acc4edcdbfcd7f19763ff285e3cac4d5",
".git/objects/4a/d2cbfd6a508800d27cd73512ca1f1f50948593": "d092b9f4deef114716de099e89c686b5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/57/f88f3c52e8d1776c1c2cd171d537175e2417d4": "244697b65c8dcec24cdb93115797328b",
".git/objects/59/3208e2a50e2bbb6deb8bb378a54091ce2667e2": "ab7186b16da46b62e5cac5d469ca96af",
".git/objects/5c/0b7cc0991574271c5cd86e9945df3c1489b36f": "b8da11e71cebdf887f08f5f44ce5a7d2",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5f/9c222cca3a167e35842b2079ad9dc4745a26a5": "6395130a170a2f8ebb657e2b2584f7a8",
".git/objects/69/3b8c8659e59e3e03e0c53ff3bc05ee97b3eda2": "798995f112a1dc7842ac244b9b7328f3",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/c44b455c4117d86cd9163ed4aefc8973545b08": "b30d94d47871290a871c91178797934c",
".git/objects/6b/0b3f5094644210440c6822b73920be2459287d": "6a4d64ab2bf2b579447d29f8a155a9a4",
".git/objects/6b/e6cb826abfbb22e735863b4cfa069421254b8f": "8484adccd091c1372f56a6955dfad8a7",
".git/objects/6c/3eecbdb1e82625c433361ac7f4d5d1958356b2": "6a2c67314ecdaa990874f3ac206ae416",
".git/objects/6d/75f96ab638ed628bd4023c8e67dff5eedee9a1": "ea01e3799becd526962de1c84181da86",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/22b785fc583ada7f9afc2d263e46c36f22e23d": "ce851bb3deed681dd40153b812fc8fdd",
".git/objects/80/9f971e167e9d4f962c4253e0e2235b27063446": "1d2455ac541d1e3075be37a94d8f1771",
".git/objects/84/737a7cc55cb939c138c8d29f6721990d0929fb": "823aaae1e01d8f18067532ba7c35673e",
".git/objects/88/1c3220687034150d8b848209d2f5121fe581cb": "a0aaaf134b06f241a336593a450e15c6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/33875ff890043fcc6fe1c27a967d51ef3a9820": "96ce73a518b1cc3ed5363cefb97cc327",
".git/objects/94/9fffd477fc5ed86e8fa7c4a9aa91b454fd3c96": "130c68fe493700ab7a74ee8732e33d45",
".git/objects/9d/44e3d3ad054e64c0edb78588dc43cf5929f921": "07725ba785f8fe0865b9bad2a22f9100",
".git/objects/a1/21fa135741a333129ae6e00ea4858eee29832a": "36404371db1b9130812fe57760e93d71",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/752aa127afbaa059c98e207f135fa71140acbe": "d41c60a9e4583187623b94a147655058",
".git/objects/a8/2d059b3de9c6cc908d8affac2b1ab15c9e3038": "f95cebfd15495679d68cba5f207714d0",
".git/objects/ac/3438b832acbf345a81231e8b35ed26399e5b8b": "d85767cea8e51187d8f5fafc327560f3",
".git/objects/af/bdbdc196c4b09cc78971418cbb24492297c41e": "8e2e6727f44763d1da03930483b8d6ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/689a3fb57ed9c8b95a260e775e7ce543e89b2d": "3efde382999e189a37bcaf88016f81a1",
".git/objects/bc/411a61d5dfbf44026c12b83f982cfbad28f41f": "6ec6179bffb1f60fcdce0c291dca2a48",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/6b1a18d639ec285548c961ca0b9a084f25f1b9": "b6884399f919f8a489961b623071ce80",
".git/objects/cc/34b517cd99fa7e270e6e3901d3fbbf9fcb2b07": "4ed0ba029fe3afdccc6d2f0d6e9164cd",
".git/objects/cd/973842ca11dceb958e761afa67ff077a7a29fd": "a6d054dff3dbc53998dee33ea1383629",
".git/objects/ce/0285fb1b602253dc205bb0a4e04c54b8d02b8b": "66c340880fe83858c7a8405121a9dd0d",
".git/objects/ce/1f4ae765ecac71c7781ca3efc4c35d907b5d50": "4227f082977629e7a0b7641d1a5ca771",
".git/objects/d0/47609d3ce332ee88b48880a5ae29269043cb69": "45de8faa4f21618b40fef61b7069da83",
".git/objects/d0/db5af6bac342d9eb00205435d8b8997ebee815": "6e4da0876e75953f4d6ee0d5c7830bc4",
".git/objects/d1/b4aeb49aa9cb8ae8a267dfe30f58e0561141a4": "19978677f4d2d3a1387a760a6f041148",
".git/objects/d5/c5e9f8b250890d1ced990b1f681a3cc1e9a9f2": "108be2f54c21b3482b6753d10357b4bd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c602ded63a037b8e28848585806888719d91ce": "78f3a54f5b4d331e97bc9c7b7acee7c2",
".git/objects/d8/7f566f96eaa2f16fef960a0a1e58626454569e": "866ca30f9184dae39faa79fe5d253245",
".git/objects/dd/419210edb5181e60d173e779b4918076290173": "f14bc0dffd3d6d7dcf59f8ef5d2983ee",
".git/objects/dd/b3a70060e29ade3b3565eaed62042f92c55b7f": "e8c0a0da4469a2660fed9b9888cdc25c",
".git/objects/dd/d9a1f9e5b4279c41ae1e72de160381da045048": "906c63f738ab9053cb12dfac78bebafe",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/4cd9e3309b2602420bc3a8195136e2a47a6318": "8ac87dc956f3210908c19b46b294a9ea",
".git/objects/e1/98a489c0d3e9dc33a078ffcd1afe3dbb9f0492": "372b4b8a6d60843d56eca37e01d00890",
".git/objects/e5/55e57d0029cc7aac88f4d2103e9a3051fdfda3": "ec13fceb202cbd4375e664d8071a9e98",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/4ead2c5d6acd2be6e8024d06e3b811e2c3c61b": "fc7381793dc2ce5528daa68eb1c27086",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/dd5877715b4a51e6902f5dc044d8a2912b6aca": "922f59428809cf7dfe9a6ea3af6ff46b",
".git/objects/ed/3710a8e855970c191f82eccbdacc5c0a1f3e44": "270699a669a4a80db75a81b2465c2c2f",
".git/objects/f4/a78fbfcae6dd1d2e6e836ef097485396176933": "514ce4dad32f30c023fc22b76828068d",
".git/objects/f7/cc9ccf7a00934faa2cf6c5f94e54a0bba44103": "0b103929c494d66b3677f71b1f062166",
".git/objects/fc/cf4bd50af06ec3add30d5e5eb369af1b190e28": "d134de95945ccb927c4422b9933ca290",
".git/objects/fd/58653b53bcd3c7cd35b1caed93ecb72ddffb18": "aa66dc89a378630f9da27c893f7f02cd",
".git/refs/heads/master": "9ec379b2bcfd4a71e9a313a712127dac",
".git/refs/remotes/origin/master": "9ec379b2bcfd4a71e9a313a712127dac",
"assets/AssetManifest.json": "f744003f5b71a406c94d2a43b92715c4",
"assets/assets/congrats.wav": "c52fefe1e7403d79086e1d14c975ebb9",
"assets/assets/Correct_Sound.m4a": "77ed8a59e2cb49b4dc971a21e8f6f67a",
"assets/assets/images/3amer.png": "ea35314a6413a0c0a90ea71171a77192",
"assets/assets/images/ibrahim.png": "cfddde4423cccbf88d42d0d3f5b1ea04",
"assets/assets/images/level_1.png": "0a358484f71c8560005d79f93ea787ee",
"assets/assets/images/level_2.png": "1e4fca6f362f60c23d4e1cbddb335e2c",
"assets/assets/images/nouran%2520and%2520fatma.png": "ed2a5bff6fd66391aaccde6f5b233afe",
"assets/assets/images/person.png": "c71a3fe70f78cfbe0f9d70ece65b896f",
"assets/assets/images/reem%2520ashraf%2520and%2520reham.png": "40e960d19565e2bf3a682f8ec35ba68f",
"assets/assets/images/scome.svg": "09d5703a235ebeb6b8b6ec6a94f1c420",
"assets/assets/images/smoky.gif": "e525132b3f5c8e8a0bdd4327b6757682",
"assets/assets/images/smsa.svg": "082c5fed17550c62ba7a6a05cf098fff",
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
"assets/NOTICES": "3c0001c0e98ce1d5e8e41cf8e519cd4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"dat.gui.min.js": "b87024acb876bb767a7c27a5747d015d",
"favicon.ico": "844b66612a1c3f0790623522fde776ea",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/android-icon-144x144.png": "9e050a7b1df02c6230223f9cff22c5df",
"icons/android-icon-192x192.png": "5034a350ee1533d984192656177964dd",
"icons/android-icon-36x36.png": "710dd6456e35097362c178cab1954e8c",
"icons/android-icon-48x48.png": "7d28afdbe6305551bf5b4c28d40d25ac",
"icons/android-icon-72x72.png": "d24fda1bd0e626761a194157b1789eef",
"icons/android-icon-96x96.png": "befa396e91e1ac30a6a0ffa1a8143bcd",
"icons/apple-icon-114x114.png": "ad9d87cdb9520b25e16e65260cdce906",
"icons/apple-icon-120x120.png": "248be4b35e59137bf0229f22b9ac9731",
"icons/apple-icon-144x144.png": "9e050a7b1df02c6230223f9cff22c5df",
"icons/apple-icon-152x152.png": "0bd0322ac83a47d3b114c65216a9e7df",
"icons/apple-icon-180x180.png": "7dd7414e4bd248ff8761dd4b5f2bf952",
"icons/apple-icon-57x57.png": "b7b9c2e2e4de4da6fc13bd102d6b3e8c",
"icons/apple-icon-60x60.png": "7cbf9e22899bca2ea76a4432ce8345da",
"icons/apple-icon-72x72.png": "d24fda1bd0e626761a194157b1789eef",
"icons/apple-icon-76x76.png": "2c3ffa59d5ab95effbe66aa8857b7079",
"icons/apple-icon-precomposed.png": "31d16a21ef293216703eacc652086285",
"icons/apple-icon.png": "31d16a21ef293216703eacc652086285",
"icons/favicon-16x16.png": "f14f4e3bf16ce6d0aac24c3330898505",
"icons/favicon-32x32.png": "cff701cdad94679817b3c24f3df76b0f",
"icons/favicon-96x96.png": "befa396e91e1ac30a6a0ffa1a8143bcd",
"icons/favicon.ico": "844b66612a1c3f0790623522fde776ea",
"icons/ms-icon-144x144.png": "9e050a7b1df02c6230223f9cff22c5df",
"icons/ms-icon-150x150.png": "1bad724b6e816f9dc9125ac13fcc24ba",
"icons/ms-icon-310x310.png": "1cd9aaca179e9555b0a508b647481248",
"icons/ms-icon-70x70.png": "7a119ee2db11d83711a859c3ed2a89b5",
"index.html": "2a211f751d0e85bff0c13d6e14166f80",
"/": "2a211f751d0e85bff0c13d6e14166f80",
"main.dart.js": "8e8146384bbc558db26803b7c1be9668",
"manifest.json": "f0b1668e3454bb1c3616cb5921b6dfbe",
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
