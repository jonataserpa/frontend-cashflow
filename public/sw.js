if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const o=e=>i(e,a),r={module:{uri:a},exports:t,require:o};s[a]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Bg.jpg",revision:"378aa1404da51e0a49dc9391d268d592"},{url:"/_next/app-build-manifest.json",revision:"a0d5b08c926d0bd9bb2b79af7d22967e"},{url:"/_next/static/SLnpDK_j5JcsoexiMioNZ/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/SLnpDK_j5JcsoexiMioNZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/13b76428-56ef92d027d6786a.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/359-e792f69ef0d748f2.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/413-0e845d40548d04d2.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/472-23b9ce94437a1a0d.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/503-90a6ba5edd8f8644.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/612-a47479863cd28643.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/627-95d22add22134886.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/647-05c596398cf31399.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/706-2e36a9e8f2cf82de.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/760-a22eb99c9fdfdb2d.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/951-efc4f2b9c8b4f142.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/app/(cash)/(routes)/cash/page-d87343e11950d468.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/dashboard/layout-b5f07b602c55e214.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/app/(dashboard)/(routes)/dashboard/page-f1296d7e237d8347.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/app/(landing)/page-c1ca84b61270e3b9.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/app/(login)/(routes)/login/page-26a61409f3472c10.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/app/_not-found-0dea61c3c0a6c161.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/app/auth/page-cd563fdbaa2ec63a.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/app/layout-bcd86ea1718efcfe.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/ca377847-de556c522a7206bd.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/fd9d1056-ff718e4297f07d47.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/main-688a1ca84b99bc8f.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/main-app-d71e879536634285.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2444f325db97b0a1.js",revision:"SLnpDK_j5JcsoexiMioNZ"},{url:"/_next/static/css/4fe7addf64311f40.css",revision:"4fe7addf64311f40"},{url:"/_next/static/css/5c479a6df4df49db.css",revision:"5c479a6df4df49db"},{url:"/_next/static/media/01096eb156994e40-s.woff2",revision:"2e5d1145f808ec0a98f7a8a9bf1001ee"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/293a10483e4b8ccd-s.woff2",revision:"9cb7deec93416e01e46b21c79894f40a"},{url:"/_next/static/media/37a8a32478445fb0-s.p.woff2",revision:"ea6a50649030b503844c11b4a54d916e"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/9da87403f9f0873c-s.woff2",revision:"fe2ee2eacd9ff5b01e983481309952bc"},{url:"/_next/static/media/a3c12d0b2c89c181-s.woff2",revision:"220e96e23331592cffd92678a59baa30"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android-chrome-192x192.png",revision:"b24f22cfafbebd0487af3ce2fdd7f34e"},{url:"/android-chrome-384x384.png",revision:"b24f22cfafbebd0487af3ce2fdd7f34e"},{url:"/icon-512x512.png",revision:"f14c02aff251863d18125e75998a00e7"},{url:"/logo-task.jpg",revision:"0b095f380a3ce23bd2ec96f4f74dca3f"},{url:"/manifest.json",revision:"7b37b4c5714dc139c67759bae9896a18"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
