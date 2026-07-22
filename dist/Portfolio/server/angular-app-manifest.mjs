
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZU4OMX2R.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J23WMFYE.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VPFT2D2A.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JHYDKQEA.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-76RJWDAM.js"
    ],
    "route": "/fun"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 998, hash: '0074d734b4fc697a9c5ae7393b0af51d539034d9037ab051f44d55243120f4f7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1100, hash: '5d66fd33b6ae851cedd1fd74585e869c403d9a221468e4ed71c038e6644a37e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 26495, hash: '65e60166967f9316ed35e5006e4880de80be79b838f05caa32a71eade6779be2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'fun/index.html': {size: 3707, hash: 'ec0ea23a062b58a062ebd9ce99a94b18e2118d59b3d5f991bcfa1b59f9e34d87', text: () => import('./assets-chunks/fun_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 17845, hash: '06796236f79564a644c22ba8988ab9f3d8fc208d4f579715d91081df3cce198e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11702, hash: '3751c1444847de3f45e173e8145efc5ca0069e4bfd1343f287cdba812fbbf30e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6339, hash: '3ce5aeac923a1771daeecd92095d9e79bdc04f1c6d0b928da2f243c1fede3bef', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-HBHR6CGK.css': {size: 321, hash: 'URygdNW7uh4', text: () => import('./assets-chunks/styles-HBHR6CGK_css.mjs').then(m => m.default)}
  },
};
