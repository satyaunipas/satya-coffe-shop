if(!self.define){let e,i={};const d=(d,n)=>(d=new URL(d+".js",n).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const o=e=>d(e,r),a={module:{uri:r},exports:s,require:o};i[r]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(c(...e),s)))}}define(["./workbox-e5b96673"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:".DS_Store",revision:"8f4061ea38e30b468eba54c4bcce5a5d"},{url:"2.bundle.js",revision:"135ab73d36e886cb54577de0951a3c8d"},{url:"946.bundle.js",revision:"e24df0543b71490e60b6d60883f2f053"},{url:"app.webmanifest",revision:"957c8838112c48a51758f634991bf88d"},{url:"app~a51fa3f5.bundle.js",revision:"8e51dab0a93a0017f6bb023909de941b"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"4b261a9dc102267e497bc7d81ed59653"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"1c85872d86d19dbefcad2170949504d0"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"e488a63146ce8034f8d492fd65f1dcb1"},{url:"hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"index.html",revision:"f00c64d9b1eab1821d9b80a5f4eecc60"},{url:"satyacoffe.png",revision:"5704b9f79efb81b1dc53d6709c920bf3"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"restaurant-cache-v1",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map